"use client";

import { Briefcase, Code2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";

const sections = [
  {
    title: "Professional",
    description:
      "Career development that feels human. Resume reviews, mock interviews, alumni mentorship, and recruiter events designed to help you grow - without the pressure of performative networking.",
    icon: Briefcase,
    accent: "bg-dark-blue/5 text-dark-blue",
  },
  {
    title: "Technical",
    description:
      "Build with people who care. Project nights, hackathons, workshops, and collaborative spaces where you can learn by doing and ship things you're proud of.",
    icon: Code2,
    accent: "bg-medium-blue/10 text-medium-blue",
  },
  {
    title: "Community",
    description:
      "The friendships that make everything else matter. Coffee chats, study nights, retreats, families, and traditions that turn a campus into a home.",
    icon: Users,
    accent: "bg-maroon/10 text-maroon",
  },
];

export function WhatMakesTekDifferent() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our approach"
          title="What Makes TEK Different"
          description="Most tech organizations optimize for competition. We optimize for belonging - and the growth that follows."
        />

        <div className="mt-14 space-y-6">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-6 rounded-3xl bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-elevated sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-10"
            >
              <div
                className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${section.accent}`}
              >
                <section.icon className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-dark-neutral">
                  {section.title}
                </h3>
                <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
                  {section.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
