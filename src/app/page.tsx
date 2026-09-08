import { Hero } from "@/components/home/hero";
import { CommunitySignal } from "@/components/home/community-signal";
import { StatsSection } from "@/components/home/stats-section";
import { PhotoStorytelling } from "@/components/home/photo-storytelling";
import { CommunityImpact } from "@/components/home/community-impact";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommunitySignal />
      <StatsSection />
      <CommunityImpact />
      <PhotoStorytelling />
      <FinalCTA />
    </>
  );
}
