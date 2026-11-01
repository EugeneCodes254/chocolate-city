import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Chocolate City Kenya | Restaurant, Dining & Events",
  description:
    "Discover Chocolate City Kenya, a destination for great food, coffee, drinks, dining, private celebrations and memorable hospitality experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chocolate City Kenya | Restaurant, Dining & Events",
    description:
      "Enjoy great food, drinks, dining and memorable experiences at Chocolate City Kenya.",
  },
};

export default function Home() {
  return <HomeClient />;
}
