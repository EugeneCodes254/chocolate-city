"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SiteHeader />

      <main className="bg-[#f7f2eb] text-[#291d18]">
        {/* Hero */}
        <section className="relative isolate flex min-h-[540px] items-end overflow-hidden bg-[#211712] px-5 pb-16 pt-28 sm:min-h-[620px] sm:px-10 sm:pb-24">
          <Image
            src="/images/restaurant/restaurant-photo-06.jpg"
            alt="Chocolate City restaurant interior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1d1511]/95 via-[#1d1511]/75 to-[#1d1511]/40" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1d1511]/85 via-[#1d1511]/15 to-[#1d1511]/25" />

          <div className="relative mx-auto w-full max-w-7xl">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#e9a17b]">
              We would love to hear from you
            </p>

            <h1 className="max-w-4xl font-serif text-6xl font-normal leading-[0.98] tracking-[-0.045em] text-[#fffaf4] sm:text-7xl md:text-8xl">
              Every great moment
              <br />
              <em className="text-[#e9a17b]">starts somewhere.</em>
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                Have a question, planning a celebration or simply want to say
                hello? Start a conversation with the Chocolate City team.
              </p>

              <a
                href="#contact-form"
                className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#e9a17b] pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#e9a17b]"
              >
                Get in touch <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact details and form */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b95b32]">
              Get in touch
            </p>

            <h2 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-6xl">
              Let&apos;s talk
              <br />
              <em>about it.</em>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#796b61]">
              Whether it is a question about dining, a private celebration
              or a corporate gathering, we would love to hear what you have
              in mind.
            </p>

            <div className="mt-10 space-y-7 border-t border-[#291d18]/10 pt-8">
              <a
                href="mailto:info@chocolatecity.co.ke"
                className="group flex items-start gap-4"
              >
                <span className="flex size-12 shrink-0 items-center justify-center bg-[#eee5da] text-[#b95b32] transition group-hover:bg-[#291d18] group-hover:text-white">
                  <Mail size={19} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#796b61]">
                    Email us
                  </span>
                  <span className="mt-2 block text-sm font-medium text-[#291d18] transition group-hover:text-[#b95b32]">
                    info@chocolatecity.co.ke
                  </span>
                </span>
              </a>

              <a
                href="tel:+254703827955"
                className="group flex items-start gap-4"
              >
                <span className="flex size-12 shrink-0 items-center justify-center bg-[#eee5da] text-[#b95b32] transition group-hover:bg-[#291d18] group-hover:text-white">
                  <Phone size={19} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#796b61]">
                    Call our team
                  </span>
                  <span className="mt-2 block text-sm font-medium text-[#291d18] transition group-hover:text-[#b95b32]">
                    +254 703 827 955
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center bg-[#eee5da] text-[#b95b32]">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#796b61]">
                    Find Chocolate City
                  </span>
                  <span className="mt-2 block text-sm font-medium text-[#291d18]">
                    Kileleshwa · Nairobi
                  </span>
                  <span className="mt-1 block text-sm text-[#796b61]">
                    Machakos · Karen, Kenya
                  </span>
                  <a
                    href="/locations"
                    className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b95b32] hover:text-[#291d18]"
                  >
                    Explore locations <ArrowUpRight size={14} />
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-12 border-l-2 border-[#b95b32] bg-[#eee5da] p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b95b32]">
                For events & groups
              </p>
              <h3 className="mt-3 font-serif text-2xl">
                Planning something special?
              </h3>
              <p className="mt-3 text-xs leading-6 text-[#796b61]">
                Include your preferred date, group size and occasion so the
                team can understand your request.
              </p>
              <a
                href="/events"
                className="mt-5 inline-flex items-center gap-2 border-b border-[#b95b32]/50 pb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#291d18] transition hover:text-[#b95b32]"
              >
                Explore event experiences <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="border border-[#291d18]/10 bg-[#fbf8f3] p-6 sm:p-10 lg:p-12"
          >
            {submitted ? (
              <div className="flex min-h-[420px] flex-col justify-center" role="status">
                <CheckCircle2
                  size={42}
                  strokeWidth={1.3}
                  className="text-[#b95b32]"
                />
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b95b32]">
                  Form preview
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  Thank you for reaching out.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#796b61]">
                  This is currently a front-end demonstration. Your details
                  have not been sent or stored. A secure submission service
                  still needs to be connected.
                </p>
                <button
                  type="button"
                  className="mt-9 inline-flex w-fit items-center gap-3 bg-[#291d18] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#b95b32]"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-9 border-b border-[#291d18]/10 pb-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b95b32]">
                    Start a conversation
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-normal">
                    How can we help?
                  </h2>
                  <p className="mt-3 text-xs leading-6 text-[#796b61]">
                    Share a few details about your enquiry.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                        Your name *
                      </span>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Full name"
                        required
                        className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition placeholder:text-[#a79a90] focus:border-[#b95b32]"
                      />
                    </label>

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
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                      What is your enquiry about? *
                    </span>
                    <select
                      name="subject"
                      defaultValue=""
                      required
                      className="min-h-12 w-full border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition focus:border-[#b95b32]"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="general">General enquiry</option>
                      <option value="dining">Dining</option>
                      <option value="event">Private event</option>
                      <option value="corporate">Corporate gathering</option>
                      <option value="other">Other</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold text-[#51443c]">
                      Tell us more *
                    </span>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Share the details of your enquiry..."
                      required
                      className="w-full resize-y border border-[#291d18]/15 bg-white px-4 py-3 text-sm text-[#291d18] outline-none transition placeholder:text-[#a79a90] focus:border-[#b95b32]"
                    />
                  </label>
                </div>

                <button
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#291d18] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b95b32]"
                  type="submit"
                >
                  Preview submission <ArrowRight size={17} />
                </button>

                <p className="mt-5 text-[10px] leading-6 text-[#796b61]">
                  Prototype only. This form does not yet send or store
                  personal information.
                </p>
              </>
            )}
          </form>
        </section>

        {/* Closing CTA */}
        <section className="relative isolate overflow-hidden bg-[#291d18] px-5 py-20 text-[#fffaf4] sm:px-8 sm:py-28">
          <Image
            src="/images/restaurant/restaurant-photo-18.jpg"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-[#291d18]/80" />

          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e9a17b]">
                Your next moment starts here
              </p>
              <h2 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-7xl">
                We can&apos;t wait
                <br />
                <em className="text-[#e9a17b]">to welcome you.</em>
              </h2>
            </div>

            <a
              href="/reservations"
              className="inline-flex w-fit items-center gap-3 border border-[#e9a17b] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#e9a17b] hover:text-[#291d18]"
            >
              Reserve a table <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
