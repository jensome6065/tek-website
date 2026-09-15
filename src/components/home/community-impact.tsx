"use client";

import { useEffect, useRef, useState } from "react";
import { featuredCompanies } from "@/lib/data/companies";
import { CompanyLogoCard } from "@/components/home/company-logo-card";

function LogoMarqueeRow({
  companies,
  direction = "left",
  duration = 50,
}: {
  companies: typeof featuredCompanies;
  direction?: "left" | "right";
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { rootMargin: "120px 0px", threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="logo-marquee group/row relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 2.5rem, #000 calc(100% - 2.5rem), transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 2.5rem, #000 calc(100% - 2.5rem), transparent)",
      }}
    >
      <ul
        className="flex w-max gap-6 py-1"
        style={{
          animation: active
            ? `logo-marquee-${direction} ${duration}s linear infinite`
            : "none",
        }}
      >
        {companies.map((company) => (
          <CompanyLogoCard key={company.id} company={company} />
        ))}
        {/* Only mount loop clones once the row is near the viewport */}
        {active
          ? companies.map((company) => (
              <CompanyLogoCard
                key={`dup-${company.id}`}
                company={company}
                decorative
              />
            ))
          : null}
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
        <div className="mx-auto mb-8 max-w-2xl text-center">
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
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col gap-6">
          <LogoMarqueeRow companies={rowOne} direction="left" duration={55} />
          <LogoMarqueeRow companies={rowTwo} direction="right" duration={60} />
        </div>
      </div>
    </section>
  );
}
