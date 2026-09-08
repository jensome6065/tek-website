import Link from "next/link";
import { DinoSprite } from "@/components/shared/dino-sprite";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  className?: string;
  actionLabel?: string;
  actionHref?: string;
  /** Subtle animation — bob for waiting, wander for lost. */
  mood?: "idle" | "bob" | "wander";
}

export function EmptyState({
  title,
  description,
  className,
  actionLabel,
  actionHref,
  mood = "idle",
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className
      )}
    >
      <div
        className={cn(
          mood === "bob" && "dino-bob",
          mood === "wander" && "dino-wander"
        )}
      >
        <DinoSprite size={48} tone="muted" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-dark-neutral">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Button asChild variant="secondary" size="sm" className="mt-6">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
