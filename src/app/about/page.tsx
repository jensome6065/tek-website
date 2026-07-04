import type { Metadata } from "next";
import {
  history,
  milestones,
  mission,
  values,
  vision,
} from "@/lib/data/about";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Timeline } from "@/components/shared/timeline";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TEK's mission, values, history, and vision - building a technology community at UMass Amherst where students belong.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TEK"
        title="A community we wished existed"
        description="TEK was built for students who want more than competitions and resume lines - they want people to grow with."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-page grid gap-16 lg:gap-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedReveal>
              <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
                Mission
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-dark-neutral sm:text-4xl">
                Why we exist
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {mission}
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
                Vision
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-dark-neutral sm:text-4xl">
                Where we&apos;re going
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {vision}
              </p>
            </AnimatedReveal>
          </div>

          <div>
            <SectionHeader
              eyebrow="What we stand for"
              title="Our values"
              description="These principles guide every event, every conversation, and every decision we make."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <AnimatedReveal
                  key={value.title}
                  delay={index * 0.06}
                  className="rounded-2xl bg-card p-8 shadow-soft"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-dark-neutral">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">
                    {value.description}
                  </p>
                </AnimatedReveal>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-background-warm p-8 sm:p-12">
            <SectionHeader eyebrow="Our story" title="History" />
            <AnimatedReveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
                {history}
              </p>
            </AnimatedReveal>
          </div>

          <div>
            <SectionHeader
              eyebrow="Milestones"
              title="How we got here"
              description="A few moments that shaped TEK into the community it is today."
              className="mb-12"
            />
            <Timeline items={milestones} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Be part of the next chapter"
        description="Whether you're a prospective member or a partner, we'd love to meet you."
        primaryLabel="Join TEK"
        primaryHref="/recruitment"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}
