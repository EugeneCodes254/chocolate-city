import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chocolate City Kenya | Food, Drinks & Experiences",
  description:
    "Discover Chocolate City Kenya. Explore dining, drinks, events and hospitality experiences made for bringing people together.",
  applicationName: "Chocolate City Kenya",
  openGraph: {
    title: "Chocolate City Kenya",
    description:
      "Good food, great company and experiences worth remembering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
