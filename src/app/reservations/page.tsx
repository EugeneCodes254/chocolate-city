"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  CalendarDays,
  Clock3,
  Users,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [enquiryId, setEnquiryId] = useState("");

  const submissionLock = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionLock.current) return;

    submissionLock.current = true;
    setSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: {
        error?: string;
        message?: string;
        enquiry?: { id?: string; status?: string };
      } = await response.json();

      if (!response.ok) {
        setErrorMessage(
          result.error || "We couldn't submit your enquiry. Please try again."
        );
        return;
      }

      setEnquiryId(result.enquiry?.id ?? "");
      setSubmitted(true);
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    } finally {
      submissionLock.current = false;
      setSubmitting(false);
    }
  }

  return (
    <>
      <SiteHeader />

      <main className="bg-[#f7f2eb] text-[#291d18]">
        {/* Reservation introduction */}
        <section className="relative isolate overflow-hidden bg-[#291d18] px-5 py-20 text-[#fffaf4] sm:px-8 sm:py-28">
          <Image
            src="/images/restaurant/restaurant-photo-12.jpg"
            alt="Chocolate City restaurant entrance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1d1511]/95 via-[#1d1511]/80 to-[#1d1511]/55" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1d1511]/70 via-transparent to-[#1d1511]/20" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#e9a17b]">
                Your table awaits
              </p>

              <h1 className="font-serif text-6xl font-normal leading-[0.98] tracking-[-0.045em] sm:text-7xl md:text-8xl">
                Make room for
                <br />
                <em className="text-[#e9a17b]">something memorable.</em>
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                A relaxed meal, a special celebration or time well spent with
                your favourite people. Tell us what you have in mind.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-[#e9a17b]" />
                  Kileleshwa
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-[#e9a17b]" />
                  Machakos
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-[#e9a17b]" />
                  Karen
                </span>
              </div>
            </div>

            <div className="border border-white/20 bg-[#291d18]/65 p-7 backdrop-blur-sm sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e9a17b]">
                A little about your visit
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight">
                Good food.
                <br />
                Great company.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Share your preferred date, time and party size. Our team will
                review your enquiry and get back to you to confirm availability.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b95b32]">
              Plan your visit
            </p>

            <h2 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-6xl">
              Let&apos;s make
              <br />
              <em>it a moment.</em>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#796b61]">
              Complete the enquiry form and let us know how we can make your
              visit special. For larger groups, include the details in your
              special requests.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#291d18]/10 pt-8">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center bg-[#eee5da] text-[#b95b32]">
                  <CalendarDays size={19} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em]">
                    Choose your date
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#796b61]">
                    Let us know when you would like to visit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center bg-[#eee5da] text-[#b95b32]">
                  <Users size={19} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em]">
                    Tell us your party size
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#796b61]">
                    From an intimate table to a larger gathering.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center bg-[#eee5da] text-[#b95b32]">
                  <Clock3 size={19} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em]">
                    Await confirmation
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#796b61]">
                    Your table is confirmed only after our team responds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-[#291d18]/10 bg-[#fbf8f3] p-6 sm:p-10 lg:p-12"
          >
            {submitted ? (
              <div
                className="flex min-h-[420px] flex-col justify-center"
                role="status"
              >
                <CheckCircle2
                  size={42}
                  strokeWidth={1.3}
                  className="text-[#b95b32]"
                />
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b95b32]">
                  Details received
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  Thank you for your interest.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#796b61]">
                  Your enquiry has been saved. Our team will need to confirm
                  availability before your reservation is confirmed.
                </p>
                {enquiryId && (
                  <p className="mt-5 border border-[#291d18]/10 bg-white px-5 py-4 text-xs text-[#796b61]">
                    Enquiry ID: <strong className="text-[#291d18]">{enquiryId}</strong>
                  </p>
                )}
                <button
                  className="mt-9 inline-flex w-fit items-center gap-3 bg-[#291d18] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#b95b32]"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-9 border-b border-[#291d18]/10 pb-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b95b32]">
                    Reservation enquiry
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-normal">
                    Tell us about your visit.
                  </h2>
                  <p className="mt-3 text-xs leading-6 text-[#796b61]">
                    Fields marked with * are required.
                  </p>
                </div>

                <div className="space-y-6">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                      Full name *
                    </span>
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      required
                      className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition placeholder:text-[#a79a90] focus:border-[#b95b32]"
                    />
                  </label>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                        Email address *
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition placeholder:text-[#a79a90] focus:border-[#b95b32]"
                      />
                    </label>

                    <label className="block min-w-0">
                      <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                        Phone number *
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="0712345678 or +254712345678"
                        pattern="(?:0[0-9]{9}|[+][1-9][0-9]{7,14}|0[0-9 ()-]{8,18}[0-9]|[+][1-9][0-9 ()-]{7,18}[0-9])"
                        title="Enter a valid phone number, such as 0712345678 or +254712345678."
                        maxLength={40}
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition placeholder:text-[#a79a90] focus:border-[#b95b32]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#51443c]">
                        <CalendarDays size={14} className="text-[#b95b32]" />
                        Preferred date *
                      </span>
                      <input
                        name="date"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition focus:border-[#b95b32]"
                      />
                    </label>

                    <label className="block min-w-0">
                      <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#51443c]">
                        <Clock3 size={14} className="text-[#b95b32]" />
                        Preferred time *
                      </span>
                      <input
                        name="time"
                        type="time"
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition focus:border-[#b95b32]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#51443c]">
                        <Users size={14} className="text-[#b95b32]" />
                        Number of guests *
                      </span>
                      <select
                        name="guests"
                        defaultValue="2"
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition focus:border-[#b95b32]"
                      >
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(
                          (n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "guest" : "guests"}
                            </option>
                          ),
                        )}
                        <option value="21+">More than 20 guests</option>
                      </select>
                    </label>

                    <label className="block min-w-0">
                      <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                        Preferred location *
                      </span>
                      <select
                        name="location"
                        defaultValue=""
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition focus:border-[#b95b32]"
                      >
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="Kileleshwa">Kileleshwa</option>
                        <option value="Machakos" disabled>
                          Machakos — temporarily closed for renovation
                        </option>
                        <option value="Karen">Karen</option>
                        <option value="Other">Other / please advise</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                      Occasion or special requests
                    </span>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Tell us about your plans (optional)"
                      className="w-full resize-y border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition placeholder:text-[#a79a90] focus:border-[#b95b32]"
                    />
                  </label>
                </div>

                {errorMessage && (
                  <p
                    className="mt-6 border border-red-200 bg-red-50 p-4 text-xs leading-6 text-red-700"
                    role="alert"
                  >
                    {errorMessage}
                  </p>
                )}

                <button
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#291d18] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b95b32] disabled:cursor-not-allowed disabled:opacity-60"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending enquiry..." : "Send reservation enquiry"}
                  {!submitting && <ArrowRight size={17} />}
                </button>

                <p className="mt-5 text-[10px] leading-6 text-[#796b61]">
                  Sending an enquiry does not confirm a table. Your reservation
                  is pending until the team confirms availability.
                </p>
              </>
            )}
          </form>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
