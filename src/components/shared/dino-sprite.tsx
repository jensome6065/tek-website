import { cn } from "@/lib/utils";

export const DINO_SPRITE = "/cursors/dino-stand.png";

/** Aspect ratio of dino-stand.png */
export const DINO_ASPECT = 34 / 32;

interface DinoSpriteProps {
  size?: number;
  className?: string;
  flipped?: boolean;
  /** Use currentColor via CSS mask (inherits text color). */
  tone?: "foreground" | "muted" | "brand" | "maroon" | "inherit";
}

const toneClass = {
  foreground: "bg-foreground",
  muted: "bg-muted",
  brand: "bg-brand",
  maroon: "bg-maroon",
  inherit: "bg-current",
} as const;

export function DinoSprite({
  size = 32,
  className,
  flipped = false,
  tone = "foreground",
}: DinoSpriteProps) {
  const height = Math.round(size * DINO_ASPECT);

  return (
    <span
      aria-hidden
      className={cn(
        "dino-sprite inline-block shrink-0",
        toneClass[tone],
        className
      )}
      style={{
        width: size,
        height,
        transform: flipped ? "scaleX(-1)" : undefined,
        WebkitMaskImage: `url(${DINO_SPRITE})`,
        maskImage: `url(${DINO_SPRITE})`,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}
