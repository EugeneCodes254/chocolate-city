"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero contact-hero">
          <span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>
          <h1>Every great moment<br /><em>starts somewhere.</em></h1>
          <p>
            Tell us what you are planning, ask a question or start a
            conversation with the Chocolate City team.
          </p>
        </section>

        <section className="page-section contact-layout">
          <div className="contact-intro">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Let&apos;s talk<br /><em>about it.</em></h2>
            <p>
              Share a few details and we can shape the right enquiry
              process around your needs.
            </p>
            <div className="contact-note">
              <span className="eyebrow">FOR EVENTS & GROUPS</span>
              <p>
                Include your preferred date, group size and occasion
                so the team can understand your request.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={34} />
                <h3>Form demonstration complete</h3>
                <p>
                  Your details have not been sent or stored. The form is
                  currently a front-end prototype; a secure submission
                  service must be connected before launch.
                </p>
                <button
                  type="button"
                  className="button button-dark"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Full name"
                      required
                    />
                  </label>
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
                </div>

                <label>
                  What is your enquiry about?
                  <select name="subject" defaultValue="" required>
                    <option value="" disabled>Select an option</option>
                    <option value="general">General enquiry</option>
                    <option value="dining">Dining</option>
                    <option value="event">Private event</option>
                    <option value="corporate">Corporate gathering</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label>
                  Tell us more
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Share the details of your enquiry..."
                    required
                  />
                </label>

                <button className="button button-dark" type="submit">
                  Preview submission <ArrowRight size={16} />
                </button>

                <p className="form-disclaimer">
                  Prototype only. This form does not yet send or store
                  personal information.
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
