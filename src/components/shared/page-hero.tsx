import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 10% 0%, rgba(153, 182, 223, 0.35) 0%, transparent 50%), radial-gradient(ellipse at 90% 20%, rgba(93, 114, 173, 0.15) 0%, transparent 40%)",
        }}
      />
      <div className="container-page relative">
        <AnimatedReveal className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium tracking-wide text-medium-blue uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-dark-neutral sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {description}
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
}
