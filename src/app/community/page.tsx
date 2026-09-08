import type { Metadata } from "next";
import { pastEvents } from "@/lib/data/events";
import { EventsFilter } from "@/components/events/events-filter";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Explore TEK life - events, hangouts, and what's happening next at UMass Amherst.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Life at TEK"
        description="How we show up for each other - and what's happening next. From coffee chats to workshops, this is where community and events live together."
      />

      <section
        id="events"
        className="scroll-mt-28 bg-background-warm py-16 sm:py-20"
      >
        <div className="container-page">
          <SectionHeader
            eyebrow="Events"
            title="Show up. Connect. Grow."
            description="From professional mixers to movie nights - designed to bring people together."
            className="mb-12"
          />
          <AnimatedReveal>
            <h2 className="text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
              Upcoming
            </h2>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              Stay tuned for Fall &apos;26 recruitment.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <EventsFilter events={pastEvents} title="Past events" />
        </div>
      </section>

      <CTABanner
        title="Find your people"
        description="TEK is more than a club - it's a community built around collaboration and lasting relationships."
        primaryLabel="Join TEK"
        primaryHref="/recruitment"
        secondaryLabel="Meet our members"
        secondaryHref="/members"
      />
    </>
  );
}
