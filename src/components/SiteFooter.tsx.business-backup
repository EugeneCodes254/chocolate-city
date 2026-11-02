import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const officialEmail = "info@chocolatecity.co.ke";

const officialPhones = [
  {
    number: "+254799816578",
    display: "+254 799 816 578",
  },
  {
    number: "+254703827955",
    display: "+254 703 827 955",
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link href="/" className="footer-brand">
            <img
              src="/chocolate-city-logo-transparent.png"
              alt="Chocolate City"
              className="footer-official-logo"
              width="190"
              height="48"
              loading="lazy"
            />
          </Link>

          <p className="footer-message">
            Good food. Great company. Unforgettable moments.
          </p>

          <p className="footer-contact-note">
            Get in touch with our team to plan your next visit or event.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">Our story</Link>
          <Link href="/menu">Dining &amp; menu</Link>
          <Link href="/events">Events &amp; experiences</Link>
          <Link href="/locations">Our locations</Link>
        </div>

        <div className="footer-column">
          <h3>Get in touch</h3>

          <a href={`mailto:${officialEmail}`}>
            <Mail size={15} />
            {officialEmail}
          </a>

          {officialPhones.map((phone) => (
            <a key={phone.number} href={`tel:${phone.number}`}>
              <Phone size={15} />
              {phone.display}
            </a>
          ))}

          <Link href="/contact">
            Contact our team <ArrowUpRight size={14} />
          </Link>

          <Link href="/reservations">
            Make a reservation <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="footer-column">
          <h3>Find us online</h3>

          <p>Our official social media links will be added here soon.</p>

          <a
            href="https://maps.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={15} />
            Find a location <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Chocolate City Kenya</span>
        <Link href="/contact">Contact</Link>
        <Link href="/">Back to top ↑</Link>
        <span>FOOD · DRINKS · EXPERIENCES</span>
      </div>
    </footer>
  );
}
