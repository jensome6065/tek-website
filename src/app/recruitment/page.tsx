import type { Metadata } from "next";
import {
  importantDates,
  infoNight,
  recruitmentFaqs,
  recruitmentSteps,
} from "@/lib/data/recruitment";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Timeline } from "@/components/shared/timeline";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { CTABanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "Join TEK at UMass Amherst. Learn about our recruitment process, important dates, and FAQ.",
  alternates: { canonical: "/recruitment" },
};

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Fall '26 · Beta Class"
        title="Join a community that invests in you"
        description="Beta class recruitment releases soon. We look for curiosity, kindness, and a desire to build with others - not a perfect resume."
      />

      <section
        id="info-night"
        className="scroll-mt-28 bg-background-warm py-16 sm:py-20"
      >
        <div className="container-page">
          <SectionHeader
            eyebrow="Next up"
            title={infoNight.title}
            description={infoNight.description}
          />
          <AnimatedReveal className="mt-10 max-w-xl rounded-2xl bg-card p-6 shadow-soft sm:p-8">
            <p className="text-sm font-medium text-maroon">{infoNight.date}</p>
            <p className="mt-3 text-base text-dark-neutral">
              {infoNight.time}
              <span className="mx-2 text-border" aria-hidden>
                ·
              </span>
              {infoNight.location}
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Express interest</Link>
            </Button>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="The process"
              title="How recruitment works"
              description="Open events for anyone interested, then invite-only closed events - designed to help us get to know each other, not to stress you out."
            />
            <Button asChild size="lg" className="shrink-0 self-start">
              <Link href="/contact">Express interest</Link>
            </Button>
          </div>
          <div className="mt-12 max-w-2xl">
            <Timeline items={recruitmentSteps} variant="process" />
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Mark your calendar"
            title="Important dates"
            description="Info night is locked in. Remaining recruitment dates will be announced soon."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {importantDates.map((item, index) => (
              <AnimatedReveal
                key={item.label}
                delay={index * 0.05}
                className="rounded-2xl bg-card p-6 shadow-soft"
              >
                <p className="text-sm font-medium text-maroon">{item.date}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-dark-neutral">
                  {item.label}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeader
            eyebrow="Questions"
            title="FAQ"
            description="Everything you might want to know before applying."
            className="mb-10"
          />
          <FAQAccordion items={recruitmentFaqs} />
        </div>
      </section>

      <CTABanner
        title="Ready when you are"
        description="Start with an interest form or reach out - we'd love to hear from you."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="Explore community"
        secondaryHref="/community"
      />
    </>
  );
}
