"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={prefersReducedMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <Image
          src="/hero.jpg"
          alt="TEK members gathering in professional attire"
          fill
          priority
          className="object-cover object-[42%_40%] sm:object-[45%_35%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Readability washes — left for type, top for nav, bottom for transition */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background: `
            linear-gradient(90deg, rgba(20, 28, 48, 0.88) 0%, rgba(20, 28, 48, 0.62) 38%, rgba(20, 28, 48, 0.28) 62%, rgba(20, 28, 48, 0.12) 100%),
            linear-gradient(180deg, rgba(20, 28, 48, 0.55) 0%, transparent 28%, transparent 70%, rgba(20, 28, 48, 0.45) 100%)
          `,
        }}
      />

      <div className="container-page relative w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
            className="mb-5 text-sm font-medium tracking-wide text-light-blue uppercase"
          >
            UMass Amherst
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">Technology.</span>
            <span className="block">Empowerment.</span>
            <span className="block">Kinship.</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            The first professional and social technology community at UMass
            Amherst.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-surface-inverse text-brand hover:bg-surface-inverse/90"
            >
              <Link href="/recruitment">Join TEK</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
