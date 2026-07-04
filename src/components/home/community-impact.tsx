"use client";

import { featuredCompanies } from "@/lib/data/companies";
import { CompanyLogoCard } from "@/components/home/company-logo-card";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

function LogoMarqueeRow({
  companies,
  direction = "left",
  duration = 50,
}: {
  companies: typeof featuredCompanies;
  direction?: "left" | "right";
  duration?: number;
}) {
  const loop = [...companies, ...companies];

  return (
    <div className="logo-marquee group/row relative overflow-hidden">
      <ul
        className="flex w-max gap-2.5 py-1"
        style={{
          animation: `logo-marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {loop.map((company, index) => (
          <CompanyLogoCard
            key={`${company.id}-${index}`}
            company={company}
          />
        ))}
      </ul>
    </div>
  );
}

export function CommunityImpact() {
  const midpoint = Math.ceil(featuredCompanies.length / 2);
  const rowOne = featuredCompanies.slice(0, midpoint);
  const rowTwo = featuredCompanies.slice(midpoint);

  return (
    <section className="overflow-hidden bg-background-warm py-14 sm:py-16">
      <div className="container-page">
        <AnimatedReveal className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
            Placements
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
            Our Community
          </h2>
          <p className="mt-2 text-muted">
            Members building across tech, finance, healthcare, research, and
            startups.
          </p>
        </AnimatedReveal>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background-warm to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background-warm to-transparent sm:w-20"
          aria-hidden
        />

        <div className="flex flex-col gap-2.5">
          <LogoMarqueeRow companies={rowOne} direction="left" duration={55} />
          <LogoMarqueeRow companies={rowTwo} direction="right" duration={60} />
        </div>
      </div>
    </section>
  );
}
