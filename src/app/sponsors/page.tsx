import type { Metadata } from "next";
import Link from "next/link";
import {
  foundersCircleBenefits,
  sponsorContact,
  sponsorIntro,
  sponsorshipEnables,
  sponsorshipImpact,
  sponsorTiers,
  strategicAlignment,
  strategicVision,
  tekHighlights,
  whyPartner,
} from "@/lib/data/sponsors";
import { sponsorStats } from "@/lib/data/stats";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Partner with TEK at UMass Amherst. Sponsorship tiers from Bronze to Founders Circle - support workshops, recruitment pipelines, and the next generation of tech leaders.",
};

const tierAccentStyles: Record<
  NonNullable<(typeof sponsorTiers)[number]["accent"]>,
  { badge: string; price: string }
> = {
  founders: {
    badge: "bg-brand text-white",
    price: "text-light-blue",
  },
  platinum: {
    badge: "bg-dark-neutral/10 text-dark-neutral",
    price: "text-dark-blue",
  },
  gold: {
    badge: "bg-[#C4A35A]/15 text-[#8B6914]",
    price: "text-[#8B6914]",
  },
  silver: {
    badge: "bg-dark-neutral/8 text-dark-neutral/80",
    price: "text-muted",
  },
  bronze: {
    badge: "bg-[#B87333]/15 text-[#8B4513]",
    price: "text-[#8B4513]",
  },
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title={sponsorIntro.title}
        description={sponsorIntro.description}
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Your impact"
            title="Your sponsorship will allow TEK to"
            description="Partnership funds go directly into programs that help students grow - technically, professionally, and as a community."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {sponsorshipEnables.map((item, index) => (
              <AnimatedReveal
                key={item}
                delay={index * 0.05}
                className="flex gap-4 rounded-2xl bg-card p-6 shadow-soft"
              >
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light-blue/30 text-sm font-semibold text-dark-blue"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <p className="text-dark-neutral leading-relaxed">{item}</p>
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="TEK so far"
            title="A young chapter with real momentum"
            description="Founded in 2025 as the first professional and social technology community at UMass Amherst - with rapid semester-over-semester growth."
          />
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {sponsorStats.map((stat) => (
              <div key={stat.id} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
                {stat.detail ? (
                  <p className="mt-2 text-sm text-muted">{stat.detail}</p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tekHighlights.map((item, index) => (
              <AnimatedReveal
                key={item.title}
                delay={index * 0.06}
                className="rounded-2xl bg-card p-8 shadow-soft"
              >
                <h3 className="text-lg font-semibold tracking-tight text-dark-neutral">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {item.description}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why TEK"
            title="Why partner with TEK"
            description="TEK stands apart from traditional student organizations by offering a structured professional network, alumni pipeline, and interdisciplinary collaboration model."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyPartner.map((item, index) => (
              <AnimatedReveal
                key={item.title}
                delay={index * 0.06}
                className="rounded-2xl bg-card p-8 shadow-soft"
              >
                <h3 className="text-xl font-semibold tracking-tight text-dark-neutral">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {item.description}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Sponsorship tiers"
            title="Partnership levels"
            description="Flexible options designed around how you want to engage with our community."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sponsorTiers.map((tier, index) => {
              const accent = tier.accent
                ? tierAccentStyles[tier.accent]
                : tierAccentStyles.silver;
              const isFounders = tier.highlighted;

              return (
                <AnimatedReveal
                  key={tier.name}
                  delay={index * 0.06}
                  className={cn(
                    "flex flex-col rounded-3xl p-8 shadow-soft",
                    isFounders
                      ? "bg-brand text-white shadow-elevated md:col-span-2 xl:col-span-1 xl:row-span-2"
                      : "bg-card",
                    index === 0 && "xl:-translate-y-1"
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium",
                      isFounders
                        ? "bg-card/15 text-light-blue"
                        : accent.badge
                    )}
                  >
                    {tier.name}
                  </span>
                  <p
                    className={cn(
                      "mt-4 text-3xl font-semibold tracking-tight",
                      isFounders ? "text-white" : accent.price
                    )}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={cn(
                      "mt-3 leading-relaxed",
                      isFounders ? "text-light-blue/90" : "text-muted"
                    )}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className={cn(
                          "text-sm leading-relaxed",
                          isFounders
                            ? "text-white/90"
                            : "text-dark-neutral/80"
                        )}
                      >
                        <span
                          className={cn(
                            "mr-2",
                            isFounders ? "text-light-blue" : "text-medium-blue"
                          )}
                        >
                          ?
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Founders Circle"
            title="Why become a founding sponsor?"
            description="As a Founders Circle partner, your organization is not just sponsoring an event - you are shaping the future of technology leadership at UMass Amherst and across New England."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foundersCircleBenefits.map((item, index) => (
              <AnimatedReveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-2xl bg-card p-8 shadow-soft"
              >
                <h3 className="text-lg font-semibold tracking-tight text-dark-neutral">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Where funds go"
            title="Impact of sponsorship"
            description="Your sponsorship is not just a donation - it is an investment in the future of technology leadership."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsorshipImpact.map((item, index) => (
              <AnimatedReveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-2xl bg-card p-8 shadow-soft"
              >
                <h3 className="text-lg font-semibold tracking-tight text-dark-neutral">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Alignment"
            title="Strategic alignment with sponsor priorities"
            description="TEK is uniquely positioned to help corporate partners meet their recruitment, innovation, and DEI objectives."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strategicAlignment.map((item, index) => (
              <AnimatedReveal
                key={item.pillar}
                delay={index * 0.06}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <p className="text-sm font-medium tracking-wide text-maroon uppercase">
                  {item.pillar}
                </p>
                <p className="mt-4 text-muted leading-relaxed">{item.benefit}</p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Looking ahead"
            title="Five-year strategic vision"
            description="Your sponsorship contributes to a long-term ecosystem of innovation, talent development, and community impact."
          />
          <ol className="mt-10 space-y-6">
            {strategicVision.map((item, index) => (
              <AnimatedReveal
                key={item.period}
                delay={index * 0.05}
                className="flex gap-6 rounded-2xl bg-card p-6 shadow-soft sm:p-8"
              >
                <span className="shrink-0 text-sm font-semibold text-maroon sm:w-24">
                  {item.period}
                </span>
                <p className="text-dark-neutral leading-relaxed">
                  {item.description}
                </p>
              </AnimatedReveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <AnimatedReveal>
            <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 shadow-elevated sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 0%, #5D72AD 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #99B6DF 0%, transparent 45%)",
                }}
              />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Let&apos;s build the future of tech culture at UMass
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-light-blue/90">
                    Thank you for considering partnership with TEK. Together, we
                    can empower the next generation of leaders.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-surface-inverse text-brand hover:bg-surface-inverse/90"
                    >
                      <a href={`mailto:${sponsorContact.email}`}>
                        Email sponsorship
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="border-white/20 bg-card/10 text-white hover:bg-card/15 hover:border-white/30"
                    >
                      <Link href="/contact">Contact form</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-2xl bg-card/10 p-8 backdrop-blur-sm">
                  <h3 className="text-sm font-medium tracking-wide text-light-blue uppercase">
                    Sponsorship contacts
                  </h3>
                  <dl className="mt-6 space-y-4 text-white">
                    <div>
                      <dt className="text-sm text-light-blue/80">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${sponsorContact.email}`}
                          className="font-medium hover:underline"
                        >
                          {sponsorContact.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-light-blue/80">
                        President of Finance
                      </dt>
                      <dd className="font-medium">
                        {sponsorContact.financePresident}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-light-blue/80">
                        Vice President of Finance
                      </dt>
                      <dd className="font-medium">
                        {sponsorContact.financeVicePresident}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-light-blue/80">Instagram</dt>
                      <dd>
                        <a
                          href={sponsorContact.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline"
                        >
                          {sponsorContact.instagram}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
