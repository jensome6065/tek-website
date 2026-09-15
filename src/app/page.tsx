import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { FinalCTA } from "@/components/home/final-cta";

const StatsSection = dynamic(
  () =>
    import("@/components/home/stats-section").then((mod) => mod.StatsSection),
  { loading: () => <div className="min-h-[12rem]" aria-hidden /> }
);

const CommunityImpact = dynamic(
  () =>
    import("@/components/home/community-impact").then(
      (mod) => mod.CommunityImpact
    ),
  { loading: () => <div className="min-h-[14rem]" aria-hidden /> }
);

const PhotoStorytelling = dynamic(
  () =>
    import("@/components/home/photo-storytelling").then(
      (mod) => mod.PhotoStorytelling
    ),
  { loading: () => <div className="min-h-[28rem]" aria-hidden /> }
);

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
