"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { recruitmentSignal } from "@/lib/data/recruitment";

const ease = [0.22, 1, 0.36, 1] as const;

const headline =
  "UMass' first professional and social tech community";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const words = headline.split(" ");

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="TEK members gathering in professional attire"
          fill
          priority
          className="object-cover object-[42%_40%] sm:object-[45%_35%]"
          sizes="100vw"
        />
      </div>

      {/* Soft readability wash — keeps faces visible */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background: `
            linear-gradient(105deg, rgba(20, 28, 48, 0.72) 0%, rgba(20, 28, 48, 0.42) 36%, rgba(20, 28, 48, 0.14) 58%, rgba(20, 28, 48, 0.06) 100%),
            linear-gradient(180deg, rgba(20, 28, 48, 0.35) 0%, transparent 22%, transparent 72%, rgba(20, 28, 48, 0.28) 100%)
          `,
        }}
      />

      <div className="container-page relative w-full">
        <div className="max-w-2xl">
          <div className="overflow-hidden pb-1">
            <motion.p
              className="flex text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl"
              aria-label="TEK"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.08,
                    delayChildren: prefersReducedMotion ? 0 : 0.04,
                  },
                },
              }}
            >
              {"TEK".split("").map((letter) => (
                <motion.span
                  key={letter}
                  className="inline-block"
                  variants={{
                    hidden: prefersReducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: "110%" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease },
                    },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <motion.div
            className="mt-4 h-0.5 origin-left bg-maroon"
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.32, ease }
            }
            style={{ width: "3.5rem" }}
            aria-hidden
          />

          <h1 className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            <span className="sr-only">{headline}</span>
            <motion.span
              aria-hidden
              className="flex flex-wrap gap-x-[0.3em]"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.045,
                    delayChildren: prefersReducedMotion ? 0 : 0.38,
                  },
                },
              }}
            >
              {words.map((word, index) => (
                <span key={`${word}-${index}`} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: prefersReducedMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: "100%" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55, ease },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: 0.95, ease }
            }
            className="mt-4 text-sm tracking-wide text-white/65 sm:text-base"
          >
            Technology · Empowerment · Kinship
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.55, delay: 1.05, ease }
            }
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Button asChild size="lg" variant="accent">
              <Link href="/recruitment">Join TEK</Link>
            </Button>
            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 text-base font-medium text-white/90 transition-colors hover:text-white"
            >
              What we do
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </motion.div>

          {recruitmentSignal.active ? (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.45, delay: 1.2, ease }
              }
              className="mt-8"
            >
              <Link
                href={recruitmentSignal.href}
                className="inline-flex flex-wrap items-center gap-x-2.5 text-sm text-white/75 transition-colors hover:text-white"
              >
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
                  <span
                    className={
                      prefersReducedMotion
                        ? "absolute inset-0 rounded-full bg-maroon/50"
                        : "absolute inset-0 animate-ping rounded-full bg-maroon/50"
                    }
                  />
                  <span className="relative h-2 w-2 rounded-full bg-maroon" />
                </span>
                <span className="font-medium text-light-blue">
                  Fall &apos;26 recruitment
                </span>
                <span className="text-white/40" aria-hidden>
                  ·
                </span>
                <span>Beta class soon</span>
              </Link>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
