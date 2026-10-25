import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Navigation,
  Clock,
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
    description:
      "Join us for food, drinks and good company at our Kileleshwa restaurant and bar.",
    map: "https://maps.app.goo.gl/m8SWXGUffdbdcJ7W8",
    image: "/images/restaurant/restaurant-photo-04.jpg",
    number: "01",
  },
  {
    name: "Machakos",
    area: "Machakos, Kenya",
    phone: "+254 703 827 205",
    tel: "+254703827205",
    parking: "Spacious parking",
    description:
      "Enjoy a welcoming restaurant and bar experience in Machakos, ideal for meals and gatherings.",
    map: "https://maps.app.goo.gl/98EL4mgC9MeCN3cJ6",
    image: "/images/restaurant/restaurant-photo-09.jpg",
    number: "02",
  },
];

export default function LocationsPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#f7f2eb] text-[#291d18]">
        {/* Hero */}
        <section className="relative isolate flex min-h-[570px] items-end overflow-hidden bg-[#211712] px-5 pb-16 pt-28 sm:min-h-[680px] sm:px-10 sm:pb-24">
          <Image
            src="/images/restaurant/restaurant-photo-06.jpg"
            alt="Inside Chocolate City restaurant"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1d1511]/95 via-[#1d1511]/75 to-[#1d1511]/40" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1d1511]/85 via-[#1d1511]/20 to-[#1d1511]/30" />

          <div className="relative mx-auto w-full max-w-7xl">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#e9a17b]">
              Find your place
            </p>

            <h1 className="max-w-4xl font-serif text-6xl font-normal leading-[0.98] tracking-[-0.045em] text-[#fffaf4] sm:text-7xl md:text-8xl">
              Good times are
              <br />
              <em className="text-[#e9a17b]">closer than you think.</em>
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                Find your nearest Chocolate City, explore directions and plan
                your next meal, celebration or gathering with us.
              </p>

              <Link
                href="#branches"
                className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#e9a17b] pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#e9a17b]"
              >
                Explore locations <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              <span>Kileleshwa</span>
              <span>Machakos</span>
              <span>Karen · Coming soon</span>
            </div>
          </div>
        </section>

        {/* Branches */}
        <section
          id="branches"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b95b32]">
                Our locations
              </p>
              <h2 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-6xl">
                Your table.
                <br />
                <em>Your kind of moment.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#796b61] md:justify-self-end">
              Wherever you find us, there is room for good food, great company
              and memorable moments. Choose a location and plan your visit.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {branches.map((branch) => (
              <article
                key={branch.name}
                className="group flex flex-col border border-[#291d18]/10 bg-[#fbf8f3]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#291d18]">
                  <Image
                    src={branch.image}
                    alt={`${branch.name} Chocolate City location`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 bg-[#291d18]/85 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#fffaf4]">
                    LOCATION {branch.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b95b32]">
                    <MapPin size={14} />
                    {branch.area}
                  </div>

                  <h3 className="font-serif text-4xl font-normal tracking-tight">
                    {branch.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#796b61]">
                    {branch.description}
                  </p>

                  <div className="mt-7 space-y-4 border-t border-[#291d18]/10 pt-6">
                    <div className="flex items-center gap-3 text-sm text-[#51443c]">
                      <Phone size={17} className="text-[#b95b32]" />
                      <a
                        href={`tel:${branch.tel}`}
                        className="transition hover:text-[#b95b32]"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#51443c]">
                      <Navigation size={17} className="text-[#b95b32]" />
                      {branch.parking}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <a
                      href={branch.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#291d18] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#b95b32]"
                    >
                      Get directions <ArrowUpRight size={15} />
                    </a>

                    <a
                      href={`tel:${branch.tel}`}
                      className="inline-flex items-center gap-2 border-b border-[#b95b32]/50 pb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#291d18] transition hover:text-[#b95b32]"
                    >
                      Call branch <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-[11px] leading-6 text-[#796b61]">
            Please contact your preferred branch before travelling to confirm
            current operating hours.
          </p>
        </section>

        {/* Coming soon */}
        <section className="border-y border-[#291d18]/10 bg-[#eee5da] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b95b32]">
                Coming soon
              </p>

              <h2 className="font-serif text-6xl font-normal leading-[1.02] tracking-[-0.04em] sm:text-7xl">
                Chocolate City
                <br />
                <em>Karen.</em>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#796b61]">
                Karen is listed as a forthcoming location. Contact our team
                for the latest update on its opening.
              </p>

              <a
                href="tel:+254799816578"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#b95b32]/50 pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#291d18] transition hover:text-[#b95b32]"
              >
                <Phone size={15} /> +254 799 816 578
              </a>
            </div>

            <div className="border border-[#291d18]/10 bg-[#fbf8f3] p-8 sm:p-10">
              <Clock size={27} strokeWidth={1.4} className="text-[#b95b32]" />
              <h3 className="mt-6 font-serif text-3xl">A new place to gather.</h3>
              <p className="mt-4 text-sm leading-7 text-[#796b61]">
                The opening date and operating hours have not yet been
                confirmed. Please contact the Chocolate City team for updates.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative isolate overflow-hidden bg-[#291d18] px-5 py-24 text-[#fffaf4] sm:px-8 sm:py-32">
          <Image
            src="/images/restaurant/restaurant-photo-18.jpg"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-[#291d18]/80" />

          <div className="relative mx-auto max-w-7xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e9a17b]">
              We look forward to welcoming you
            </p>

            <div className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="max-w-3xl font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-7xl">
                  Make room for
                  <br />
                  <em className="text-[#e9a17b]">good company.</em>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
                  Planning a visit, celebration or group gathering? Get in
                  touch with our team and let's plan your experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-3 border border-[#e9a17b] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#e9a17b] hover:text-[#291d18]"
                >
                  Reserve a table <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 self-center border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:text-[#e9a17b]"
                >
                  Contact us <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
