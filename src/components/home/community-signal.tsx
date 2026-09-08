"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { recruitmentSignal } from "@/lib/data/recruitment";

export function CommunitySignal() {
  const prefersReducedMotion = useReducedMotion();

  if (!recruitmentSignal.active) return null;

  return (
    <section
      aria-label="What's happening"
      className="border-y border-border/60 bg-background-warm"
    >
      <div className="container-page">
        <Link
          href={recruitmentSignal.href}
          className="group flex items-center justify-between gap-4 py-3.5 sm:py-4"
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span
                className={
                  prefersReducedMotion
                    ? "absolute inset-0 rounded-full bg-maroon/40"
                    : "absolute inset-0 animate-ping rounded-full bg-maroon/40"
                }
              />
              <span className="relative h-2.5 w-2.5 rounded-full bg-maroon" />
            </span>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-dark-neutral sm:text-base">
                <span className="text-maroon">{recruitmentSignal.label}</span>
                <span className="mx-2 text-border" aria-hidden>
                  ·
                </span>
                <span className="text-muted">{recruitmentSignal.detail}</span>
              </p>
            </div>
          </div>

          <motion.span
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-medium-blue transition-colors group-hover:text-dark-blue"
            whileHover={prefersReducedMotion ? undefined : { x: 2 }}
          >
            <span className="hidden sm:inline">{recruitmentSignal.cta}</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
            <span className="sr-only">{recruitmentSignal.cta}</span>
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
