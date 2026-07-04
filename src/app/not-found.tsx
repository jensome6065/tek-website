import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 pt-24">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-dark-neutral">
          Page not found
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          That page doesn&apos;t exist - or it moved. Let&apos;s get you back to
          the community.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
