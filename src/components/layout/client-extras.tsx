"use client";

import { useEffect, useState, type ComponentType } from "react";

type DinoModule = {
  DinoCursor: ComponentType;
  DinoEasterEgg: ComponentType;
};

/**
 * Loads decorative dino extras only after idle — never during SSR —
 * so they cannot affect hydration or the critical path.
 */
export function ClientExtras() {
  const [mods, setMods] = useState<DinoModule | null>(null);

  useEffect(() => {
    if (navigator.webdriver) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const load = () => {
      void Promise.all([
        import("@/components/layout/dino-cursor"),
        import("@/components/shared/dino-easter-egg"),
      ]).then(([cursor, egg]) => {
        if (cancelled) return;
        setMods({
          DinoCursor: cursor.DinoCursor,
          DinoEasterEgg: egg.DinoEasterEgg,
        });
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(load, { timeout: 3500 });
    } else {
      timeoutId = window.setTimeout(load, 2000);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!mods) return null;

  const { DinoCursor, DinoEasterEgg } = mods;
  return (
    <>
      <DinoCursor />
      <DinoEasterEgg />
    </>
  );
}
