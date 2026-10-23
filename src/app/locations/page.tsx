import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Locations | Chocolate City Kenya",
  description:
    "Find Chocolate City Kenya locations in Kileleshwa and Machakos, explore directions, and contact our team about your visit.",
};

const branches = [
  {
    name: "Kileleshwa",
    area: "Nairobi, Kenya",
    phone: "+254 703 827 955",
    tel: "+254703827955",
    parking: "Free parking",
    status: "Open location",
    description:
      "Join us for food, drinks and good company at our Kileleshwa restaurant and bar.",
    map: "https://maps.app.goo.gl/m8SWXGUffdbdcJ7W8",
  },
  {
    name: "Machakos",
    area: "Machakos, Kenya",
    phone: "+254 703 827 205",
    tel: "+254703827205",
    parking: "Spacious parking",
    status: "Open location",
    description:
      "Enjoy a welcoming restaurant and bar experience in Machakos, ideal for meals and gatherings.",
    map: "https://maps.app.goo.gl/98EL4mgC9MeCN3cJ6",
  },
];

export default function LocationsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="inner-hero locations-hero">
          <div className="inner-hero-content">
            <span className="eyebrow">FIND YOUR PLACE</span>
            <h1>
              Good times are
              <br />
              <em>closer than you think.</em>
            </h1>
            <p>
              Find your nearest Chocolate City, explore directions and plan
              your next meal, celebration or gathering with us.
            </p>

            <div className="hero-actions">
              <Link href="#branches" className="button button-light">
                Explore our locations <ArrowRight size={17} />
              </Link>
              <Link href="/reservations" className="text-link light-link">
                Reserve a table <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="page-section" id="branches">
          <div className="page-heading">
            <span className="eyebrow">OUR LOCATIONS</span>
            <h2>
              Your table.
              <br />
              <em>Your kind of moment.</em>
            </h2>
            <p>
              Visit us in Kileleshwa or Machakos. Contact the relevant branch
              before travelling to confirm current operating hours.
            </p>
          </div>

          <div className="location-branches-grid">
            {branches.map((branch, index) => (
              <article className="location-branch-card" key={branch.name}>
                <div className="location-branch-top">
                  <span className="eyebrow">
                    LOCATION 0{index + 1}
                  </span>
                  <MapPin size={22} aria-hidden="true" />
                </div>

                <h2>{branch.name}</h2>
                <p className="location-branch-area">{branch.area}</p>
                <p>{branch.description}</p>

                <div className="location-branch-detail">
                  <Phone size={17} aria-hidden="true" />
                  <a href={`tel:${branch.tel}`}>{branch.phone}</a>
                </div>

                <div className="location-branch-detail">
                  <Navigation size={17} aria-hidden="true" />
                  <span>{branch.parking}</span>
                </div>

                <div className="location-branch-actions">
                  <a
                    className="button button-dark"
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions <ArrowUpRight size={16} />
                  </a>
                  <a className="text-link" href={`tel:${branch.tel}`}>
                    Call branch <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="location-coming-soon">
          <div>
            <span className="eyebrow">COMING SOON</span>
            <h2>
              Chocolate City
              <br />
              <em>Karen</em>
            </h2>
            <p>
              Karen is listed as a forthcoming location on the existing
              Chocolate City website. Contact our team for the latest update.
            </p>
            <a className="text-link" href="tel:+254799816578">
              <Phone size={16} /> +254 799 816 578
            </a>
          </div>
          <div className="location-coming-soon-note">
            <Clock size={25} strokeWidth={1.5} />
            <p>
              Opening date and operating hours have not been confirmed here.
            </p>
          </div>
        </section>

        <section className="page-cta">
          <span className="eyebrow">WE LOOK FORWARD TO WELCOMING YOU</span>
          <h2>
            Make room for
            <br />
            <em>good company.</em>
          </h2>
          <p>
            Planning a visit, celebration or group gathering? Get in touch
            with our team and let&apos;s plan your experience.
          </p>
          <div className="hero-actions">
            <Link href="/reservations" className="button button-light">
              Reserve a table <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="text-link light-link">
              Contact us <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
