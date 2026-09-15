"use client";

import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/shared/section-header";
import { momentPhotos } from "@/lib/data/moments";
import { momentVideos } from "@/lib/data/moment-videos";

const MomentsVideoReel = dynamic(
  () =>
    import("@/components/shared/moments-video-reel").then(
      (mod) => mod.MomentsVideoReel
    ),
  {
    loading: () => (
      <div
        className="aspect-[9/16] w-full max-w-[17.5rem] rounded-[1.75rem] bg-brand/10"
        aria-hidden
      />
    ),
  }
);

const MomentsGallery = dynamic(
  () =>
    import("@/components/shared/moments-gallery").then(
      (mod) => mod.MomentsGallery
    ),
  {
    loading: () => (
      <div className="min-h-[28rem] rounded-2xl bg-brand/5" aria-hidden />
    ),
  }
);

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

        <div className="grid items-start gap-6 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[19rem_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-28">
            <MomentsVideoReel videos={momentVideos} />
          </div>
          <MomentsGallery photos={momentPhotos} />
        </div>
      </div>
    </section>
  );
}
