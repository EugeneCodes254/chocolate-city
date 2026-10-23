import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const allowedLocations = new Set([
  "Kileleshwa",
  "Machakos",
  "Other",
]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function todayInNairobi() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );

  return `${values.year}-${values.month}-${values.day}`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    const parsed: unknown = await request.json();

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      Array.isArray(parsed)
    ) {
      return NextResponse.json(
        { error: "Please submit a valid reservation enquiry." },
        { status: 400 },
      );
    }

    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  const name =
    typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string"
      ? body.email.trim().toLowerCase()
      : "";
  const phone =
    typeof body.phone === "string" ? body.phone.trim() : "";
  const date =
    typeof body.date === "string" ? body.date : "";
  const time =
    typeof body.time === "string" ? body.time : "";
  const guestsInput =
    typeof body.guests === "string" ||
    typeof body.guests === "number"
      ? String(body.guests)
      : "";
  const location =
    typeof body.location === "string" ? body.location : "";
  const notes =
    typeof body.notes === "string" ? body.notes.trim() : "";

  if (
    name.length < 2 ||
    name.length > 120 ||
    !isValidEmail(email) ||
    email.length > 254 ||
    phone.length < 7 ||
    phone.length > 40 ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !/^\d{2}:\d{2}$/.test(time) ||
    !allowedLocations.has(location) ||
    notes.length > 2000
  ) {
    return NextResponse.json(
      {
        error:
          "Please check your name, email, phone, date, time, location, and notes.",
      },
      { status: 400 },
    );
  }

  const parsedDate = new Date(`${date}T00:00:00.000Z`);

  if (
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== date ||
    date < todayInNairobi()
  ) {
    return NextResponse.json(
      { error: "Please choose today or a future date." },
      { status: 400 },
    );
  }

  const [hours, minutes] = time.split(":").map(Number);

  if (hours > 23 || minutes > 59) {
    return NextResponse.json(
      { error: "Please choose a valid reservation time." },
      { status: 400 },
    );
  }

  const guests =
    guestsInput === "21+" ? 21 : Number(guestsInput);

  if (
    !Number.isInteger(guests) ||
    guests < 1 ||
    guests > 1000
  ) {
    return NextResponse.json(
      { error: "Please enter a valid number of guests." },
      { status: 400 },
    );
  }

  const savedNotes = [
    notes,
    guestsInput === "21+"
      ? "Group size indicated as 21+ guests."
      : "",
  ]
    .filter(Boolean)
    .join("\n")
    .slice(0, 2000);

  try {
    const result = await db.query(
      `INSERT INTO reservation_enquiries
        (name, email, phone, reservation_date, reservation_time,
         guests, location, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, status, created_at`,
      [
        name,
        email,
        phone,
        date,
        time,
        guests,
        location,
        savedNotes || null,
      ],
    );

    return NextResponse.json(
      {
        message:
          "Your reservation enquiry has been received. The team must confirm availability before your booking is confirmed.",
        enquiry: {
          id: String(result.rows[0].id),
          status: result.rows[0].status,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Reservation enquiry could not be saved:", error);

    return NextResponse.json(
      {
        error:
          "We couldn't save your enquiry right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
