"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "span";
}

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimatedRevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px", threshold: 0.08 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal-fade",
        visible && "reveal-fade--visible",
        className
      )}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "ul" | "section";
}

/** Parent for scroll-triggered staggered children (`StaggerItem`). */
export function StaggerReveal({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  as = "div",
}: StaggerRevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px", threshold: 0.08 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal-stagger",
        visible && "reveal-stagger--visible",
        className
      )}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-stagger": `${stagger}s`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span";
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const Tag = as as ElementType;
  return <Tag className={cn("reveal-stagger__item", className)}>{children}</Tag>;
}
