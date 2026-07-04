import { Hero } from "@/components/home/hero";
import { WhyTekExists } from "@/components/home/why-tek-exists";
import { StatsSection } from "@/components/home/stats-section";
import { WhatMakesTekDifferent } from "@/components/home/what-makes-tek-different";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { MemberStories } from "@/components/home/member-stories";
import { PhotoStorytelling } from "@/components/home/photo-storytelling";
import { CommunityImpact } from "@/components/home/community-impact";
import { ThisWeekAtTek } from "@/components/home/this-week-at-tek";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyTekExists />
      <StatsSection />
      <CommunityImpact />
      <WhatMakesTekDifferent />
      <UpcomingEvents />
      <MemberStories />
      <PhotoStorytelling />
      <ThisWeekAtTek />
      <FinalCTA />
    </>
  );
}
