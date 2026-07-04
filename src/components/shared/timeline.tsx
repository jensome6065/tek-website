"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  description: string;
  year?: string;
  label?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: "vertical" | "process";
}

export function Timeline({ items, variant = "vertical" }: TimelineProps) {
  if (variant === "process") {
    return (
      <ol className="relative space-y-0">
        {items.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-soft">
                {index + 1}
              </div>
              {index < items.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-border" aria-hidden />
              )}
            </div>
            <div className="pt-1.5">
              <h3 className="text-lg font-semibold text-dark-neutral">
                {item.title}
              </h3>
              <p className="mt-1 max-w-xl text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="relative border-l border-border ml-3 space-y-10">
      {items.map((item, index) => (
        <motion.li
          key={`${item.year}-${item.title}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative pl-8"
        >
          <span
            className={cn(
              "absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-medium-blue ring-4 ring-background"
            )}
            aria-hidden
          />
          {item.year && (
            <p className="text-sm font-medium text-maroon">{item.year}</p>
          )}
          <h3 className="mt-1 text-xl font-semibold text-dark-neutral">
            {item.title}
          </h3>
          <p className="mt-2 max-w-xl text-muted leading-relaxed">
            {item.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
