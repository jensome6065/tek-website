import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <AnimatedReveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center shadow-elevated sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 20% 0%, #5D72AD 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #99B6DF 0%, transparent 45%)",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-light-blue/90">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-surface-inverse text-brand hover:bg-surface-inverse/90"
                >
                  <Link href={primaryHref}>{primaryLabel}</Link>
                </Button>
                {secondaryLabel && secondaryHref && (
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="border-white/20 bg-card/10 text-white hover:bg-card/15 hover:border-white/30"
                  >
                    <Link href={secondaryHref}>{secondaryLabel}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
