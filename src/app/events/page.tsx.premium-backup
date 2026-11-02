import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, Users, BriefcaseBusiness, PartyPopper } from "lucide-react";

const experiences = [
  {
    title: "Private Celebrations",
    category: "SPECIAL OCCASIONS",
    description:
      "Bring friends and family together for birthdays, milestones and memorable gatherings.",
    icon: PartyPopper,
  },
  {
    title: "Corporate Gatherings",
    category: "BUSINESS & NETWORKING",
    description:
      "Create space for team dinners, client meetings and professional get-togethers.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Group Dining",
    category: "FOOD & CONNECTION",
    description:
      "Plan a shared dining experience for the people who matter most.",
    icon: Users,
  },
];

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero events-hero">
          <span className="eyebrow">GATHER · CELEBRATE · CONNECT</span>
          <h1>Make room for<br /><em>something special.</em></h1>
          <p>
            From personal celebrations to professional gatherings,
            let us help you start planning your next occasion.
          </p>
          <Link href="/contact" className="button button-light">
            Plan an event <ArrowRight size={16} />
          </Link>
        </section>

        <section className="page-section">
          <div className="page-heading">
            <span className="eyebrow">THE POSSIBILITIES</span>
            <h2>Every occasion has<br /><em>a place here.</em></h2>
          </div>

          <div className="experience-grid">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <article className="experience-card" key={experience.title}>
                  <span className="experience-number">0{index + 1}</span>
                  <Icon size={27} strokeWidth={1.3} />
                  <span className="eyebrow">{experience.category}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <Link href="/contact" className="text-link">
                    Make an enquiry <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="page-note">
            Event capacities, packages, availability and pricing are subject
            to confirmation by the Chocolate City team.
          </p>
        </section>

        <section className="page-cta">
          <span className="eyebrow">LET&apos;S START PLANNING</span>
          <h2>Your occasion.<br /><em>Your people.</em></h2>
          <Link href="/contact" className="button button-light">
            Enquire about an event <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
