"use client";

import dynamic from "next/dynamic";

const DinoCursor = dynamic(
  () =>
    import("@/components/layout/dino-cursor").then((mod) => mod.DinoCursor),
  { ssr: false }
);

const DinoEasterEgg = dynamic(
  () =>
    import("@/components/shared/dino-easter-egg").then(
      (mod) => mod.DinoEasterEgg
    ),
  { ssr: false }
);

/** Defers decorative dino extras until after hydration to keep the main bundle light. */
export function ClientExtras() {
  return (
    <>
      <DinoCursor />
      <DinoEasterEgg />
    </>
  );
}
