"use client";

import {
  BookOpen,
  Building2,
  Clapperboard,
  Code2,
  Coffee,
  Handshake,
  Home,
  Layers,
  Mountain,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { communityPillars } from "@/lib/data/community";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Coffee,
  Code2,
  Home,
  Clapperboard,
  Mountain,
  Building2,
  Handshake,
  Layers,
};

export function CommunityGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {communityPillars.map((pillar, index) => {
        const Icon = iconMap[pillar.icon] ?? Layers;
        return (
          <motion.article
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue/25 text-dark-blue">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-dark-neutral">
              {pillar.title}
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              {pillar.description}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
