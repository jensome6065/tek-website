import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-10 text-center shadow-elevated sm:px-12 sm:py-12">
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
              Your journey starts here.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Build, grow, and find your people at TEK.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-surface-inverse text-brand hover:bg-surface-inverse/90"
              >
                <Link href="/recruitment">Join TEK</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-white/20 bg-card/10 text-white hover:bg-card/15 hover:border-white/30"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
