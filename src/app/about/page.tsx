import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us | Chocolate City Kenya",
  description:
    "Discover Chocolate City Kenya, its dining experiences, hospitality and events.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero about-hero">
          <div className="inner-hero-content">
            <span className="eyebrow">OUR STORY · OUR EXPERIENCE</span>
            <h1>
              More than a venue.
              <br />
              <em>A place to connect.</em>
            </h1>
            <p>
              Great food, welcoming spaces and memorable moments come
              together at Chocolate City.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/menu">
                Explore our menu <ArrowRight size={17} />
              </Link>
              <Link className="text-link light-link" href="/contact">
                Talk to our team <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-story section-pad">
          <div>
            <span className="eyebrow">HOSPITALITY WITH PURPOSE</span>
            <h2>
              Made for good food.
              <br />
              <em>Made for togetherness.</em>
            </h2>
          </div>
          <div className="about-story-copy">
            <p>
              Whether you are meeting friends, sharing a meal with family,
              organising an event or planning a special gathering, the
              experience should bring people together.
            </p>
            <p>
              Chocolate City brings dining, drinks and hospitality
              experiences into one destination. We are building this page
              around the brand&apos;s real story and will incorporate its
              approved company history and milestones before launch.
            </p>
            <Link className="text-link" href="/events">
              Discover our events <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="about-cta">
          <span className="eyebrow">YOUR NEXT EXPERIENCE STARTS HERE</span>
          <h2>
            Bring your people.
            <br />
            <em>We&apos;ll set the scene.</em>
          </h2>
          <Link className="button button-light" href="/reservations">
            Reserve a table <ArrowRight size={17} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
