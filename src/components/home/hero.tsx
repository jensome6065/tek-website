"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 15% 10%, rgba(153, 182, 223, 0.35) 0%, transparent 45%), radial-gradient(ellipse at 85% 0%, rgba(93, 114, 173, 0.18) 0%, transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(43, 60, 103, 0.06) 0%, transparent 50%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-light-blue/20 blur-3xl"
        aria-hidden
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-sm font-medium tracking-wide text-medium-blue uppercase"
            >
              UMass Amherst
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl font-semibold tracking-tight text-dark-neutral sm:text-6xl lg:text-7xl"
            >
              <span className="block">Technology.</span>
              <span className="block">Empowerment.</span>
              <span className="block">Kinship.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              The first professional and social technology community at UMass
              Amherst.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href="/recruitment">Join TEK</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
          >
            <div className="relative aspect-square w-full max-w-sm">
              <div className="absolute inset-6 rounded-full bg-light-blue/20 blur-2xl" />
              <Image
                src="/logos/tek-circle.png"
                alt="TEK at UMass Amherst logo"
                fill
                className="object-contain drop-shadow-xl"
                priority
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
