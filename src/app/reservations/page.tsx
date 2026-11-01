import type { Metadata } from "next";
import ReservationsClient from "./ReservationsClient";

export const metadata: Metadata = {
  title: "Book a Table | Chocolate City Kenya",
  description:
    "Plan your next dining experience at Chocolate City Kenya. Contact our team to enquire about table reservations, group dining and special occasions.",
  alternates: {
    canonical: "/reservations",
  },
  openGraph: {
    title: "Book a Table | Chocolate City Kenya",
    description:
      "Get in touch with Chocolate City Kenya to plan your dining experience, group booking or special occasion.",
  },
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
