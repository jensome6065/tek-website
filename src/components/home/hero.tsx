import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recruitmentSignal } from "@/lib/data/recruitment";

const headline =
  "UMass' first professional and social tech community";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="TEK members gathering in professional attire"
          fill
          priority
          fetchPriority="high"
          quality={65}
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
          {/* Above-the-fold copy stays opaque from first paint for LCP */}
          <p className="text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            TEK
          </p>

          <div
            className="hero-underline mt-4 h-0.5 origin-left bg-maroon"
            style={{ width: "3.5rem" }}
            aria-hidden
          />

          <h1 className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {headline}
          </h1>

          <p className="mt-4 text-sm tracking-wide text-white/85 sm:text-base">
            Technology · Empowerment · Kinship
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg" variant="accent">
              <Link href="/recruitment">Join TEK</Link>
            </Button>
            <Link
              href="/about"
              className="group inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-white transition-colors hover:text-white"
            >
              What we do
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>

          {recruitmentSignal.active ? (
            <div className="mt-8">
              <Link
                href={recruitmentSignal.href}
                className="inline-flex min-h-11 flex-wrap items-center gap-x-2.5 py-2 text-sm text-white/90 transition-colors hover:text-white"
              >
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
                  <span className="hero-pulse absolute inset-0 rounded-full bg-maroon/50" />
                  <span className="relative h-2 w-2 rounded-full bg-maroon" />
                </span>
                <span className="font-medium text-light-blue">
                  {recruitmentSignal.label}
                </span>
                <span className="text-white/50" aria-hidden>
                  ·
                </span>
                <span>{recruitmentSignal.detail}</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
