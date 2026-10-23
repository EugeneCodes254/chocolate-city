"use client";

import { useState, type FormEvent } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CalendarDays, Clock3, Users, ArrowRight } from "lucide-react";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

      const result: { error?: string; message?: string } =
        await response.json();

      if (!response.ok) {
        setErrorMessage(
          result.error || "We couldn't submit your enquiry. Please try again."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="reservation-hero">
          <div className="reservation-heading">
            <span className="eyebrow">YOUR TABLE AWAITS</span>
            <h1>
              Make room for
              <br />
              <em>something memorable.</em>
            </h1>
            <p>
              Planning a meal or a special occasion? Send us your preferred
              details to get started.
            </p>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="reservation-success" role="status">
                <span className="eyebrow">DETAILS CAPTURED</span>
                <h2>Thank you for your interest.</h2>
                <p>
                  Your enquiry has been saved. Our team will need to confirm
                  availability before your reservation is confirmed.
                </p>
                <button
                  className="button button-dark"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="reservation-form-heading">
                  <span className="eyebrow">PLAN YOUR VISIT</span>
                  <h2>Reservation enquiry</h2>
                  <p>Share your preferred date and details below.</p>
                </div>

                <label>
                  Full name
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                  />
                </label>

                <div className="reservation-field-grid">
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label>
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+254..."
                      required
                    />
                  </label>
                </div>

                <div className="reservation-field-grid">
                  <label>
                    <span className="field-label">
                      <CalendarDays size={15} /> Preferred date
                    </span>
                    <input
                      name="date"
                      type="date"
                      min={new Date().toLocaleDateString("en-CA")}
                      required
                    />
                  </label>
                  <label>
                    <span className="field-label">
                      <Clock3 size={15} /> Preferred time
                    </span>
                    <input name="time" type="time" required />
                  </label>
                </div>

                <div className="reservation-field-grid">
                  <label>
                    <span className="field-label">
                      <Users size={15} /> Guests
                    </span>
                    <select name="guests" defaultValue="2" required>
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
                  <label>
                    Preferred location
                    <select name="location" defaultValue="" required>
                      <option value="" disabled>
                        Select a location
                      </option>
                      <option value="Kileleshwa">Kileleshwa</option>
                      <option value="Machakos">Machakos</option>
                      <option value="Other">Other / please advise</option>
                    </select>
                  </label>
                </div>

                <label>
                  Occasion or special requests
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Tell us about your plans (optional)"
                  />
                </label>

                {errorMessage && (
                  <p className="reservation-disclaimer" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  className="button button-dark reservation-submit"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending enquiry..." : "Send reservation enquiry"}
                  {!submitting && <ArrowRight size={17} />}
                </button>
                <p className="reservation-disclaimer">
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
