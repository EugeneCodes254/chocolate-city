import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Utensils,
  Wine,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Our Story | Chocolate City Kenya",
  description:
    "Discover Chocolate City Kenya — a destination for dining, drinks, hospitality and memorable experiences.",
};

const experiences = [
  {
    number: "01",
    title: "Dining",
    category: "FOOD & FLAVOUR",
    description:
      "Discover a welcoming dining experience made for sharing good food and meaningful moments.",
    image: "/images/restaurant/restaurant-photo-04.jpg",
    icon: Utensils,
    href: "/menu",
  },
  {
    number: "02",
    title: "Drinks & Lounge",
    category: "RELAX & UNWIND",
    description:
      "Take your time, enjoy the atmosphere and make room for great conversations.",
    image: "/images/restaurant/restaurant-photo-09.jpg",
    icon: Wine,
    href: "/menu",
  },
  {
    number: "03",
    title: "Celebrations",
    category: "EVENTS & EXPERIENCES",
    description:
      "Bring your people together and create space for occasions worth remembering.",
    image: "/images/restaurant/restaurant-photo-16.jpg",
    icon: Sparkles,
    href: "/events",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="about-premium">
        <section className="about-premium-hero">
          <div className="about-premium-hero-image" />
          <div className="about-premium-hero-overlay" />

          <div className="about-premium-hero-content">
            <span className="eyebrow">
              CHOCOLATE CITY · OUR STORY
            </span>

            <h1>
              More than a place.
              <br />
              <em>A feeling worth sharing.</em>
            </h1>

            <p>
              Good food, thoughtful hospitality and welcoming spaces.
              Discover a destination made for bringing people together.
            </p>

            <div className="about-premium-actions">
              <Link href="/menu" className="button button-light">
                Discover our dining <ArrowRight size={17} />
              </Link>

              <Link href="/reservations" className="about-premium-text-link">
                Plan your visit <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="about-premium-hero-bottom">
            <span>GOOD TASTE. GREAT COMPANY.</span>
            <span>01 — OUR STORY</span>
          </div>
        </section>

        <section className="about-premium-intro">
          <div className="about-premium-intro-label">
            <span className="eyebrow">THE CHOCOLATE CITY EXPERIENCE</span>
            <span className="about-premium-index">HOSPITALITY · CONNECTION · EXPERIENCE</span>
          </div>

          <div className="about-premium-intro-grid">
            <h2>
              Some moments deserve
              <br />
              more than <em>ordinary.</em>
            </h2>

            <div className="about-premium-intro-copy">
              <p>
                The best experiences are about more than what is on the
                table. They are about the people around it, the atmosphere
                that welcomes you and the memories you take with you.
              </p>

              <p>
                Chocolate City brings dining, drinks and experiences
                together in a welcoming destination designed around
                good food and great company.
              </p>

              <Link href="/locations" className="text-link">
                Find your destination <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-premium-story">
          <div className="about-premium-story-image">
            <Image
              src="/images/restaurant/restaurant-photo-06.jpg"
              alt="The Chocolate City hospitality and dining atmosphere"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
            <span className="about-premium-image-caption">
              THE ART OF GOOD COMPANY
            </span>
          </div>

          <div className="about-premium-story-content">
            <span className="eyebrow">MORE THAN THE MENU</span>

            <h2>
              Made for the
              <br />
              moments that
              <br />
              <em>bring us together.</em>
            </h2>

            <p>
              From a relaxed meal to an evening with friends or a special
              celebration, every visit is an opportunity to slow down,
              connect and enjoy the experience.
            </p>

            <p>
              We believe great hospitality begins with making people
              feel welcome. That is the experience we want every guest
              to discover at Chocolate City.
            </p>

            <Link href="/contact" className="text-link">
              Get to know us <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="about-premium-experiences">
          <div className="about-premium-section-heading">
            <div>
              <span className="eyebrow">EXPLORE CHOCOLATE CITY</span>
              <h2>
                Different moments.
                <br />
                <em>One destination.</em>
              </h2>
            </div>

            <p>
              However you choose to spend your time, there is room
              for good food, great company and experiences worth sharing.
            </p>
          </div>

          <div className="about-premium-experience-grid">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <Link
                  href={experience.href}
                  className="about-premium-experience-card"
                  key={experience.number}
                >
                  <div className="about-premium-card-image">
                    <Image
                      src={experience.image}
                      alt={`${experience.title} at Chocolate City`}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />

                    <span className="about-premium-card-number">
                      {experience.number}
                    </span>

                    <span className="about-premium-card-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="about-premium-card-copy">
                    <div className="about-premium-card-meta">
                      <span className="eyebrow">{experience.category}</span>
                      <Icon size={19} />
                    </div>

                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="about-premium-cta">
          <div className="about-premium-cta-content">
            <span className="eyebrow">YOUR NEXT MOMENT STARTS HERE</span>

            <h2>
              Come together.
              <br />
              <em>Make it memorable.</em>
            </h2>

            <p>
              Whether it is a table for two, a gathering with friends
              or a special occasion, we would love to welcome you.
            </p>

            <div className="about-premium-actions">
              <Link href="/reservations" className="button button-light">
                Reserve a table <ArrowRight size={17} />
              </Link>

              <Link href="/contact" className="about-premium-text-link">
                Talk to our team <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
