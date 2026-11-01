import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Chocolate City Menu | Food, Dining & Drinks",
  description:
    "Explore the Chocolate City Kenya menu, featuring breakfast, coffee, pastries, meals, grills, platters, desserts and refreshing drinks.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Chocolate City Menu | Food, Dining & Drinks",
    description:
      "Discover food, coffee, grills, platters and more on the Chocolate City Kenya menu.",
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
