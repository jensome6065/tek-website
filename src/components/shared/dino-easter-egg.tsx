"use client";

import { useEffect, useId, useState } from "react";
import { DinoSprite } from "@/components/shared/dino-sprite";

type Runner = {
  id: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
  flipped: boolean;
};

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
] as const;

/**
 * Konami code → a brief herd of dinos dashes across the screen.
 * Harmless kinship easter egg; respects reduced motion.
 */
export function DinoEasterEgg() {
  const reactId = useId();
  const [runners, setRunners] = useState<Runner[]>([]);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    let index = 0;
    let clearToast: number | undefined;
    let clearRunners: number | undefined;

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = KONAMI[index];
      const match =
        key === expected ||
        (expected.length === 1 && key === expected.toLowerCase());

      if (!match) {
        index = key === KONAMI[0] ? 1 : 0;
        return;
      }

      index += 1;
      if (index < KONAMI.length) return;
      index = 0;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setToast(true);
        window.clearTimeout(clearToast);
        clearToast = window.setTimeout(() => setToast(false), 2400);
        return;
      }

      const pack: Runner[] = Array.from({ length: 7 }, (_, i) => ({
        id: Date.now() + i,
        top: 18 + Math.random() * 64,
        duration: 2.2 + Math.random() * 1.4,
        delay: i * 0.12,
        size: 22 + Math.round(Math.random() * 18),
        flipped: Math.random() > 0.35,
      }));

      setRunners(pack);
      setToast(true);
      window.clearTimeout(clearToast);
      window.clearTimeout(clearRunners);
      clearToast = window.setTimeout(() => setToast(false), 2800);
      clearRunners = window.setTimeout(() => setRunners([]), 4200);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(clearToast);
      window.clearTimeout(clearRunners);
    };
  }, []);

  if (runners.length === 0 && !toast) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998]" aria-live="polite">
      {runners.map((runner) => (
        <span
          key={`${reactId}-${runner.id}`}
          className="dino-stampede absolute"
          style={{
            top: `${runner.top}%`,
            animationDuration: `${runner.duration}s`,
            animationDelay: `${runner.delay}s`,
          }}
        >
          <DinoSprite
            size={runner.size}
            tone="brand"
            flipped={runner.flipped}
          />
        </span>
      ))}

      {toast && (
        <p className="dino-toast absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-elevated">
          Kinship unlocked — the herd says hi.
        </p>
      )}
    </div>
  );
}
