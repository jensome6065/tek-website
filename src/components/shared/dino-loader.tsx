import { DinoSprite } from "@/components/shared/dino-sprite";
import { cn } from "@/lib/utils";

interface DinoLoaderProps {
  label?: string;
  className?: string;
  size?: number;
}

export function DinoLoader({
  label = "Finding the herd…",
  className,
  size = 40,
}: DinoLoaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div className="dino-bob">
        <DinoSprite size={size} tone="brand" />
      </div>
      <p className="text-sm font-medium text-muted">{label}</p>
    </div>
  );
}
