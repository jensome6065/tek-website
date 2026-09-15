"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { socialLinks } from "@/lib/data/navigation";
import type { MomentVideo } from "@/lib/data/moment-videos";
import { cn } from "@/lib/utils";

interface MomentsVideoReelProps {
  videos: MomentVideo[];
  className?: string;
}

export function MomentsVideoReel({ videos, className }: MomentsVideoReelProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  /** Defer attaching any MP4 sources until the reel is near the viewport. */
  const [shouldLoad, setShouldLoad] = useState(false);

  const current = videos[index];
  const hasVideos = videos.length > 0;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(media.matches);
      if (media.matches) setUserPaused(true);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "200px 0px", threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !hasVideos) return;

    const slides = Array.from(scroller.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const nextIndex = slides.indexOf(visible.target as HTMLElement);
        if (nextIndex >= 0) setIndex(nextIndex);
      },
      { root: scroller, threshold: 0.6 }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [hasVideos, videos.length]);

  useEffect(() => {
    if (!hasVideos) return;

    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      video.muted = muted;

      const shouldPlay =
        i === index &&
        isInView &&
        shouldLoad &&
        !userPaused &&
        !reducedMotion;

      // Respect reduced motion: only play after explicit user gesture (userPaused=false + click sets playing via toggle).
      const reducedPlay =
        i === index &&
        isInView &&
        shouldLoad &&
        reducedMotion &&
        !userPaused &&
        video.dataset.userStarted === "1";

      if (shouldPlay || reducedPlay) {
        video.play().catch(() => {
          // Autoplay can fail until muted / user gesture.
        });
      } else {
        video.pause();
      }
    });
  }, [
    index,
    isInView,
    hasVideos,
    reducedMotion,
    muted,
    shouldLoad,
    userPaused,
  ]);

  const togglePlayback = () => {
    const video = videoRefs.current[index];
    if (!video) {
      setUserPaused((value) => !value);
      return;
    }
    if (video.paused) {
      video.dataset.userStarted = "1";
      setUserPaused(false);
      video.play().catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  const scrollToIndex = (nextIndex: number) => {
    const scroller = scrollerRef.current;
    const slide = scroller?.children[nextIndex] as HTMLElement | undefined;
    if (!scroller || !slide) return;
    scroller.scrollTo({
      top: slide.offsetTop,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <aside
      ref={containerRef}
      className={cn("flex h-full flex-col", className)}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium tracking-wide text-medium-blue uppercase dark:text-light-blue">
            On Instagram
          </p>
          <p className="mt-1 text-sm text-muted dark:text-foreground/75">@umasstek</p>
        </div>
        <Link
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <InstagramIcon className="h-3.5 w-3.5" aria-hidden />
          Follow
        </Link>
      </div>

      <div className="relative mx-auto w-full max-w-[17.5rem] overflow-hidden rounded-[1.75rem] bg-[#211f33] shadow-elevated ring-1 ring-black/20 dark:bg-[#0c0b14] dark:ring-white/15">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
          <div className="h-1.5 w-16 rounded-full bg-white/25" aria-hidden />
        </div>

        {hasVideos ? (
          <>
            <div
              ref={scrollerRef}
              role="region"
              className="aspect-[9/16] snap-y snap-mandatory overflow-y-auto overscroll-y-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Instagram video gallery"
            >
              {videos.map((video, i) => {
                // Only attach the active video source to limit MP4 bandwidth.
                const attachSrc = shouldLoad && i === index;
                const showPoster = shouldLoad && Math.abs(i - index) <= 1;

                return (
                  <div
                    key={video.id}
                    className="relative aspect-[9/16] w-full snap-start snap-always bg-[#211f33]"
                  >
                    {showPoster ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={video.poster}
                        alt=""
                        width={540}
                        height={960}
                        decoding="async"
                        loading={i === index ? "eager" : "lazy"}
                        className="absolute inset-0 h-full w-full object-cover"
                        draggable={false}
                      />
                    ) : null}
                    {attachSrc ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        src={video.src}
                        poster={video.poster}
                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[1.06]"
                        playsInline
                        muted={muted}
                        loop={videos.length === 1}
                        preload="metadata"
                        onEnded={() => {
                          if (videos.length > 1) {
                            scrollToIndex((i + 1) % videos.length);
                          }
                        }}
                        aria-label={video.label}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pt-16 pb-4">
                <div className="pointer-events-auto flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white drop-shadow-sm">
                    {current?.label}
                  </p>
                  {videos.length > 1 ? (
                    <p className="mt-1.5 text-xs text-white/70" aria-live="polite">
                      {index + 1} / {videos.length}
                    </p>
                  ) : null}
                </div>

                <div className="flex shrink-0 gap-2">
                  {videos.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          scrollToIndex(
                            (index - 1 + videos.length) % videos.length
                          )
                        }
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                        aria-label="Previous video"
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          scrollToIndex((index + 1) % videos.length)
                        }
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                        aria-label="Next video"
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden />
                      </button>
                    </>
                  ) : null}
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    aria-label={userPaused ? "Play video" : "Pause video"}
                  >
                    {userPaused ? (
                      <Play className="h-4 w-4" aria-hidden />
                    ) : (
                      <Pause className="h-4 w-4" aria-hidden />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMuted((value) => !value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    aria-label={muted ? "Unmute video" : "Mute video"}
                  >
                    {muted ? (
                      <VolumeX className="h-4 w-4" aria-hidden />
                    ) : (
                      <Volume2 className="h-4 w-4" aria-hidden />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex aspect-[9/16] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-dark-blue via-medium-blue to-light-blue px-6 text-center text-white"
          >
            <InstagramIcon className="h-10 w-10 opacity-90" />
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Watch more on Instagram
              </p>
              <p className="mt-2 text-sm text-white/80">
                Reels from retreats, recruitment, and everyday TEK.
              </p>
            </div>
          </Link>
        )}
      </div>

      <Link
        href={current?.href ?? socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center justify-center text-center text-sm font-semibold text-medium-blue underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        View on Instagram →
      </Link>
    </aside>
  );
}
