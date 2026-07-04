"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhotoStory {
  title: string;
  description: string;
  label: string;
  gradient: string;
  reverse?: boolean;
}

interface PhotoGridProps {
  stories: PhotoStory[];
}

export function PhotoGrid({ stories }: PhotoGridProps) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {stories.map((story) => (
        <motion.div
          key={story.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
            story.reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br shadow-soft",
              story.gradient
            )}
          >
            <div className="absolute inset-0 flex items-end p-8">
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {story.label}
              </span>
            </div>
          </div>
          <div className={cn(story.reverse && "lg:order-1")}>
            <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
              Moments
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
              {story.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {story.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
