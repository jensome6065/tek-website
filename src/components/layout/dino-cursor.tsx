"use client";

import { useEffect, useId, useRef, useState } from "react";

type Footprint = {
  id: number;
  x: number;
  y: number;
  angle: number;
  side: 0 | 1;
};

const MIN_PRINT_DISTANCE = 44;
const MAX_PRINTS = 16;
const PRINT_LIFETIME_MS = 900;
const JUMP_DURATION_MS = 300;
const JUMP_HEIGHT_PX = 16;
const DINO_W = 32;
const DINO_H = 34;
const SPRITE = "/cursors/dino-stand.png";

function PrintMark({ side }: { side: 0 | 1 }) {
  const offset = side === 0 ? -2.5 : 2.5;
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="currentColor"
      aria-hidden
      style={{ transform: `translateX(${offset}px)` }}
    >
      <ellipse cx="5.5" cy="9.5" rx="2.4" ry="2.8" />
      <ellipse cx="2" cy="3.6" rx="1.2" ry="2.3" />
      <ellipse cx="5.5" cy="2.4" rx="1.2" ry="2.5" />
      <ellipse cx="9" cy="3.6" rx="1.2" ry="2.3" />
    </svg>
  );
}

function jumpOffset(progress: number) {
  const t = Math.min(1, Math.max(0, progress));
  return -4 * JUMP_HEIGHT_PX * t * (1 - t);
}

export function DinoCursor() {
  const reactId = useId();
  const [enabled, setEnabled] = useState(false);
  const [prints, setPrints] = useState<Footprint[]>([]);

  const dinoRef = useRef<HTMLSpanElement>(null);
  const lastPos = useRef({ x: -100, y: -100 });
  const lastPrint = useRef({ x: 0, y: 0 });
  const nextSide = useRef<0 | 1>(0);
  const printId = useRef(0);
  const trailOn = useRef(true);
  const flipped = useRef(false);
  const jumpStart = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  const paint = () => {
    const el = dinoRef.current;
    if (!el) return;

    const { x, y } = lastPos.current;
    const sx = flipped.current ? -1 : 1;
    let jy = 0;

    if (jumpStart.current !== null) {
      const progress =
        (performance.now() - jumpStart.current) / JUMP_DURATION_MS;
      if (progress >= 1) {
        jumpStart.current = null;
      } else {
        jy = jumpOffset(progress);
      }
    }

    el.style.opacity = x < 0 ? "0" : "1";
    el.style.transform = `translate3d(${x - DINO_W / 2}px, ${y - DINO_H + 4 + jy}px, 0) scaleX(${sx})`;
  };

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const on = finePointer.matches;
      setEnabled(on);
      trailOn.current = on && !reducedMotion.matches;
      document.documentElement.classList.toggle("dino-cursor-active", on);
    };

    sync();
    finePointer.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
      document.documentElement.classList.remove("dino-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const tick = () => {
      paint();
      if (jumpStart.current !== null) {
        raf.current = requestAnimationFrame(tick);
      } else {
        raf.current = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const prev = lastPos.current;
      const dx = x - prev.x;
      const dy = y - prev.y;

      if (Math.abs(dx) > 0.5) {
        flipped.current = dx < 0;
      }

      lastPos.current = { x, y };
      paint();

      if (!trailOn.current) return;

      const pdx = x - lastPrint.current.x;
      const pdy = y - lastPrint.current.y;
      const dist = Math.hypot(pdx, pdy);
      if (dist < MIN_PRINT_DISTANCE) return;

      const angle = Math.atan2(dy || pdy, dx || pdx) * (180 / Math.PI) + 90;
      const id = ++printId.current;
      const side = nextSide.current;
      nextSide.current = side === 0 ? 1 : 0;
      lastPrint.current = { x, y };

      setPrints((prevPrints) =>
        [...prevPrints, { id, x, y, angle, side }].slice(-MAX_PRINTS)
      );

      window.setTimeout(() => {
        setPrints((prevPrints) => prevPrints.filter((p) => p.id !== id));
      }, PRINT_LIFETIME_MS);
    };

    const onLeave = () => {
      lastPos.current = { x: -100, y: -100 };
      paint();
    };

    const onClick = () => {
      if (jumpStart.current !== null) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      jumpStart.current = performance.now();
      if (raf.current === null) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onClick);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- paint reads refs only
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden
    >
      {prints.map((print) => (
        <span
          key={`${reactId}-${print.id}`}
          className="dino-print absolute top-0 left-0 text-foreground/45 dark:text-foreground/40"
          style={{
            transform: `translate3d(${print.x}px, ${print.y}px, 0) translate(-50%, -50%) rotate(${print.angle}deg)`,
          }}
        >
          <PrintMark side={print.side} />
        </span>
      ))}

      <span
        ref={dinoRef}
        className="dino-sprite absolute top-0 left-0 opacity-0 will-change-transform"
        style={{
          width: DINO_W,
          height: DINO_H,
          transform: "translate3d(-100px, -100px, 0)",
          WebkitMaskImage: `url(${SPRITE})`,
          maskImage: `url(${SPRITE})`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
