import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://" + "www.chocolatecity.co.ke"),
  title: "Chocolate City Kenya | Dining, Drinks, Events & Experiences",
  description: "Discover Chocolate City Kenya for great food, drinks, dining, events and memorable hospitality experiences.",
  applicationName: "Chocolate City Kenya",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Chocolate City Kenya | Dining, Drinks & Experiences",
    description: "Good food, great company and memorable dining, drinks and events at Chocolate City Kenya.",
    url: "https://www.chocolatecity.co.ke",
    siteName: "Chocolate City Kenya",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chocolate City Kenya",
    description: "Discover dining, drinks, events and hospitality experiences at Chocolate City Kenya.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body>{children}</body>
    </html>
  );
}
