import { communityStats } from "@/lib/data/stats";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <AnimatedReveal className="mb-12 text-center">
          <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
            By the numbers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-dark-neutral sm:text-4xl">
            A community that shows up
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Metrics that reflect how we grow together - not just how many people
            join.
          </p>
        </AnimatedReveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
          {communityStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
