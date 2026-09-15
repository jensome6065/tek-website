"use client";

import { useState } from "react";
import { DinoSprite } from "@/components/shared/dino-sprite";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Footer kinship mark — click the dino a few times for a tiny hop easter egg.
 */
export function KinshipMark() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hops, setHops] = useState(0);
  const [hopKey, setHopKey] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const onClick = () => {
    const next = hops + 1;
    setHops(next);
    setHopKey((k) => k + 1);

    if (next === 1) {
      setMessage("The dino noticed you.");
    } else if (next === 3) {
      setMessage("Technology. Empowerment. Kinship.");
    } else if (next >= 5) {
      setMessage("You’re part of the herd.");
      setHops(0);
    } else {
      setMessage(null);
    }

    window.setTimeout(() => setMessage(null), 2200);
  };

  return (
    <div className="relative flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={onClick}
        className="group inline-flex min-h-11 items-center gap-2 rounded-full text-sm text-muted transition-colors hover:text-dark-neutral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
      >
        <span
          key={hopKey}
          className={cn(!prefersReducedMotion && hopKey > 0 && "dino-hop")}
        >
          <DinoSprite
            size={18}
            tone="inherit"
            className="opacity-70 transition-opacity group-hover:opacity-100"
          />
        </span>
        <span>Technology. Empowerment. Kinship.</span>
      </button>
      {message && (
        <p
          className="absolute -top-8 right-0 whitespace-nowrap text-xs font-medium text-maroon"
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
}
