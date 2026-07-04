import type { Metadata } from "next";
import { pastEvents, upcomingEvents } from "@/lib/data/events";
import { CommunityGrid } from "@/components/community/community-grid";
import { EventsFilter } from "@/components/events/events-filter";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Explore TEK life - study nights, coffee chats, hackathons, families, and upcoming events at UMass Amherst.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Life at TEK"
        description="How we show up for each other - and what's happening next. From coffee chats to workshops, this is where community and events live together."
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="How we gather"
            title="Every part of TEK life"
            description="Professional growth matters. So do the friendships formed over coffee, late-night builds, and weekends away."
            className="mb-12"
          />
          <CommunityGrid />
        </div>
      </section>

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
          <EventsFilter events={upcomingEvents} title="Upcoming" />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <EventsFilter events={pastEvents} title="Past events & recaps" />
          <AnimatedReveal className="mt-14 max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-dark-neutral">
              Slides & recaps
            </h3>
            <p className="mt-3 text-muted leading-relaxed">
              Many events include slides, photo recaps, and follow-up materials.
              Check individual event cards for links, or reach out if you missed
              something.
            </p>
          </AnimatedReveal>
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
