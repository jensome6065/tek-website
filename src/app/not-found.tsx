import Link from "next/link";
import { DinoSprite } from "@/components/shared/dino-sprite";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(153, 182, 223, 0.35) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-md text-center">
        <div className="mx-auto mb-6 flex justify-center">
          <div className="dino-wander">
            <DinoSprite size={64} tone="brand" />
          </div>
        </div>

        <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
          404 · Trail ended
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-dark-neutral">
          Our dino got lost
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          That page doesn&apos;t exist — or it wandered off. Kinship means we
          help each other find the way back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to the herd</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/community">Explore community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
