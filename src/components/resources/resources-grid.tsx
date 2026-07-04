"use client";

import {
  Briefcase,
  FileText,
  Layout,
  Link as LinkIcon,
  MessagesSquare,
  Zap,
  type LucideIcon,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { resources, usefulLinks } from "@/lib/data/resources";
import { SectionHeader } from "@/components/shared/section-header";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  MessagesSquare,
  Layout,
  Zap,
  Briefcase,
  Link: LinkIcon,
};

export function ResourcesGrid() {
  return (
    <>
      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = iconMap[resource.icon] ?? FileText;
              return (
                <motion.a
                  key={resource.id}
                  href={resource.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue/25 text-dark-blue">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-dark-neutral group-hover:text-dark-blue transition-colors">
                    {resource.title}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">
                    {resource.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Curated"
            title="Useful links"
            description="A short list of platforms and tools members often recommend."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usefulLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-card px-6 py-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <span className="font-medium text-dark-neutral">
                    {link.label}
                  </span>
                  <ExternalLink
                    className="h-4 w-4 text-medium-blue"
                    aria-hidden
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
