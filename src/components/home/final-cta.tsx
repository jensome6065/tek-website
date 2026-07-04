"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

const steps = [
  "Attend an Event",
  "Meet the Community",
  "Become Part of TEK",
];

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <AnimatedReveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center shadow-elevated sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 20% 0%, #5D72AD 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #99B6DF 0%, transparent 45%)",
              }}
            />

            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your journey starts here.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-light-blue/90">
                Whether you&apos;re looking to build projects, grow
                professionally, or simply find your community, there&apos;s a
                place for you at TEK.
              </p>

              <ol className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-0">
                {steps.map((step, index) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center"
                  >
                    <span className="rounded-full bg-card/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm sm:text-base">
                      {step}
                    </span>
                    {index < steps.length - 1 && (
                      <span
                        className="my-2 text-light-blue/70"
                        aria-hidden
                      >
                        ↓
                      </span>
                    )}
                  </motion.li>
                ))}
              </ol>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
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
                  className="border-white/20 bg-card/10 text-white hover:bg-card/15 hover:border-white/30"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
