import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { CommunityImpact } from "@/components/home/community-impact";
import { PhotoStorytelling } from "@/components/home/photo-storytelling";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <CommunityImpact />
      <PhotoStorytelling />
      <FinalCTA />
    </>
  );
}
