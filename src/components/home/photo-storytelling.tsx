import { MomentsGallery } from "@/components/shared/moments-gallery";
import { MomentsVideoReel } from "@/components/shared/moments-video-reel";
import { SectionHeader } from "@/components/shared/section-header";
import {
  StaggerItem,
  StaggerReveal,
} from "@/components/shared/animated-reveal";
import { momentPhotos } from "@/lib/data/moments";
import { momentVideos } from "@/lib/data/moment-videos";

export function PhotoStorytelling() {
  return (
    <section className="bg-background-warm py-14 sm:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Life at TEK"
          title="Moments that matter"
          description="Retreats, late nights, and everything in between - the memories that make TEK feel like home."
          className="mb-8"
        />

        <StaggerReveal
          className="grid items-start gap-6 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[19rem_minmax(0,1fr)]"
          delay={0.1}
          stagger={0.14}
        >
          <StaggerItem className="lg:sticky lg:top-28">
            <MomentsVideoReel videos={momentVideos} />
          </StaggerItem>
          <StaggerItem>
            <MomentsGallery photos={momentPhotos} />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
