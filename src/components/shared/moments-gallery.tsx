"use client";

import Image from "next/image";
import { useEffect, useCallback, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import type { MomentPhoto } from "@/lib/data/moments";

interface MomentsGalleryProps {
  photos: MomentPhoto[];
}

export function MomentsGallery({ photos }: MomentsGalleryProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const featured = photos[featuredIndex];

  const selectFeatured = useCallback((index: number) => {
    setFeaturedIndex(index);
  }, []);

  const stepFeatured = useCallback(
    (delta: number) => {
      setFeaturedIndex(
        (current) => (current + delta + photos.length) % photos.length
      );
    },
    [photos.length]
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Gentle auto-advance while idle and on-screen (skip when reduced motion)
  useEffect(() => {
    if (
      prefersReducedMotion ||
      !inView ||
      paused ||
      lightboxIndex !== null ||
      photos.length < 2
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % photos.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [inView, paused, lightboxIndex, photos.length, prefersReducedMotion]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % photos.length
    );
  }, [photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, showPrev, showNext]);

  useFocusTrap(lightboxIndex !== null, lightboxRef, closeLightbox);

  const lightboxPhoto =
    lightboxIndex === null ? null : photos[lightboxIndex];

  return (
    <>
      <div
        ref={rootRef}
        className="flex h-full flex-col gap-2.5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-[20rem] w-full overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/5 sm:h-[24rem] lg:h-[28rem] dark:bg-white/5 dark:ring-white/10">
          <div key={featured.id} className="absolute inset-0">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover dark:brightness-[1.06]"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <button
            type="button"
            onClick={() => setLightboxIndex(featuredIndex)}
            className="absolute inset-0"
            aria-label={`Open ${featured.label} fullscreen`}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 sm:p-5">
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-wide text-white/85 uppercase">
                {featuredIndex + 1} / {photos.length}
              </p>
              <p className="mt-1 truncate text-base font-semibold text-white sm:text-lg">
                {featured.label}
              </p>
            </div>

            <div className="pointer-events-auto relative z-10 flex shrink-0 gap-2">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  stepFeatured(-1);
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  stepFeatured(1);
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-1.5 sm:grid-cols-8 sm:gap-1.5">
          {photos.map((photo, index) => {
            const isActive = index === featuredIndex;
            return (
              <li key={photo.id}>
                <button
                  type="button"
                  onMouseEnter={() => selectFeatured(index)}
                  onFocus={() => selectFeatured(index)}
                  onClick={() => {
                    selectFeatured(index);
                    setLightboxIndex(index);
                  }}
                  className={cn(
                    "relative aspect-square min-h-11 w-full overflow-hidden rounded-md ring-1 transition-all duration-300 ease-out",
                    isActive
                      ? "ring-2 ring-medium-blue ring-offset-1 ring-offset-background dark:ring-light-blue"
                      : "ring-black/5 opacity-75 hover:opacity-100 dark:ring-white/10"
                  )}
                  aria-label={`Show ${photo.label}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="80px"
                    className={cn(
                      "object-cover transition-transform duration-500 ease-out dark:brightness-[1.06]",
                      isActive && !prefersReducedMotion
                        ? "scale-105"
                        : "scale-100"
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-center text-sm text-muted lg:text-left">
          Hover or focus to preview · Click or tap for full size
        </p>
      </div>

      {lightboxPhoto && lightboxIndex !== null ? (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 outline-none sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxPhoto.label} photo`}
          tabIndex={-1}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>

          <div className="relative flex max-h-[85vh] w-full max-w-5xl flex-col items-center">
            <div
              className="relative max-h-[80vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                width={lightboxPhoto.width}
                height={lightboxPhoto.height}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
                style={{ width: "auto", height: "auto" }}
                sizes="90vw"
              />
            </div>
            <p className="mt-4 text-sm font-medium tracking-wide text-white/90">
              {lightboxPhoto.label}
              <span className="ml-2 text-white/70">
                {lightboxIndex + 1} / {photos.length}
              </span>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
