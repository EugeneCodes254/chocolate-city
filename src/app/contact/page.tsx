import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Chocolate City Kenya | Nairobi Restaurant",
  description:
    "Get in touch with Chocolate City Kenya for restaurant enquiries, table reservations, events, group dining and general assistance. Contact our team today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Chocolate City Kenya | Nairobi Restaurant",
    description:
      "Contact Chocolate City Kenya for reservations, events, group dining and restaurant enquiries.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
