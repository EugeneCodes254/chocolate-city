import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Users,
  BriefcaseBusiness,
  PartyPopper,
} from "lucide-react";

const experiences = [
  {
    title: "Private Celebrations",
    category: "SPECIAL OCCASIONS",
    description:
      "Bring friends and family together for birthdays, milestones and memorable restaurant gatherings.",
    image: "/images/restaurant/restaurant-photo-04.jpg",
    icon: PartyPopper,
    number: "01",
  },
  {
    title: "Corporate Gatherings",
    category: "BUSINESS & NETWORKING",
    description:
      "Bring colleagues and clients together for business gatherings and conferencing at Chocolate City.",
    image: "/images/restaurant/restaurant-photo-09.jpg",
    icon: BriefcaseBusiness,
    number: "02",
  },
  {
    title: "Group Dining",
    category: "FOOD & CONNECTION",
    description:
      "Plan a shared dining experience for the people who matter most.",
    image: "/images/restaurant/restaurant-photo-16.jpg",
    icon: Users,
    number: "03",
  },
  {
    title: "Kileleshwa Meeting Rooms",
    category: "PRIVATE MEETINGS",
    description:
      "Rooms at our Kileleshwa location can be booked for private meetings. Contact the team to discuss availability and arrangements.",
    image: "/images/restaurant/restaurant-photo-16.jpg",
    icon: BriefcaseBusiness,
    number: "04",
  },
];

export default function EventsPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#f7f2eb] text-[#291d18]">
        {/* Editorial hero */}
        <section className="relative isolate flex min-h-[570px] items-end overflow-hidden bg-[#211712] px-5 pb-16 pt-28 sm:min-h-[680px] sm:px-10 sm:pb-24">
          <Image
            src="/images/restaurant/restaurant-photo-12.jpg"
            alt="Chocolate City restaurant setting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1d1511]/95 via-[#1d1511]/75 to-[#1d1511]/45" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1d1511]/85 via-[#1d1511]/25 to-[#1d1511]/35" />

          <div className="relative mx-auto w-full max-w-7xl">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#e9a17b]">
              Gather · Celebrate · Connect
            </p>

            <h1 className="max-w-4xl font-serif text-6xl font-normal leading-[0.98] tracking-[-0.045em] text-[#fffaf4] sm:text-7xl md:text-8xl">
              Make room for
              <br />
              <em className="text-[#e9a17b]">something special.</em>
            </h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                From personal celebrations to professional gatherings,
                let us help you start planning your next occasion.
              </p>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#e9a17b] pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#e9a17b]"
              >
                Plan an event <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              <span>Private celebrations</span>
              <span>Corporate gatherings</span>
              <span>Group dining</span>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b95b32]">
                The possibilities
              </p>
              <h2 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-6xl">
                Every occasion has
                <br />
                <em>a place here.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#796b61] md:justify-self-end">
              Chocolate City is a dine-in restaurant with conferencing facilities. Kileleshwa also has rooms available to book for private meetings.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article
                  key={experience.title}
                  className="group flex flex-col border border-[#291d18]/10 bg-[#fbf8f3] transition-colors hover:border-[#b95b32]/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#291d18]">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 bg-[#291d18]/85 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#fffaf4]">
                      {experience.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b95b32]">
                        {experience.category}
                      </span>
                      <Icon
                        size={23}
                        strokeWidth={1.3}
                        className="text-[#b95b32]"
                      />
                    </div>

                    <h3 className="font-serif text-3xl font-normal tracking-tight text-[#291d18]">
                      {experience.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#796b61]">
                      {experience.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#b95b32]/50 pb-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#291d18] transition hover:text-[#b95b32]"
                    >
                      Make an enquiry <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-[11px] leading-6 text-[#796b61]">
            Event capacities, packages, availability and pricing are subject
            to confirmation by the Chocolate City team.
          </p>
        </section>

        {/* Planning CTA */}
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
              Let's start planning
            </p>

            <div className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="max-w-3xl font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-7xl">
                  Your occasion.
                  <br />
                  <em className="text-[#e9a17b]">Your people.</em>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
                  Tell us what you have in mind. Our team can help you
                  discuss your event and the arrangements available.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-4 border border-[#e9a17b] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#e9a17b] hover:text-[#291d18]"
              >
                Enquire about an event <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
