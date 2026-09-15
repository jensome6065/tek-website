"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    motionValue.set(value);
  }, [isInView, motionValue, value, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [spring, prefersReducedMotion]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-semibold tracking-tight text-dark-neutral sm:text-4xl lg:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted sm:text-base">{label}</p>
    </div>
  );
}
