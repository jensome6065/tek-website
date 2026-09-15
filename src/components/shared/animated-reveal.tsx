"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: "div" | "section" | "article" | "li" | "span";
}

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  variants = defaultVariants,
  as = "div",
}: AnimatedRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const classNames = cn(className);

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={classNames}>{children}</Tag>;
  }

  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease }}
      variants={variants}
      className={classNames}
    >
      {children}
    </Component>
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
  const prefersReducedMotion = useReducedMotion();
  const classNames = cn(className);

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={classNames}>{children}</Tag>;
  }

  const Component = motion[as];

  return (
    <Component
      className={classNames}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </Component>
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
  const prefersReducedMotion = useReducedMotion();
  const classNames = cn(className);

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={classNames}>{children}</Tag>;
  }

  const Component = motion[as];

  return (
    <Component
      className={classNames}
      variants={staggerItemVariants}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </Component>
  );
}
