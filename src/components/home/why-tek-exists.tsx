"use client";

import { Briefcase, Code2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

const pillars = [
  {
    title: "Professional",
    description:
      "Resume reviews, mock interviews, and recruiter events - career growth without performative networking.",
    icon: Briefcase,
    accent: "bg-dark-blue/5 text-dark-blue",
  },
  {
    title: "Technical",
    description:
      "Project nights, hackathons, and workshops where you learn by building alongside people who care.",
    icon: Code2,
    accent: "bg-medium-blue/10 text-medium-blue",
  },
  {
    title: "Social",
    description:
      "Coffee chats, retreats, families, and traditions that turn a campus into a home.",
    icon: Users,
    accent: "bg-maroon/10 text-maroon",
  },
];

export function WhyTekExists() {
  return (
    <section className="bg-background-warm py-14 sm:py-20">
      <div className="container-page">
        <AnimatedReveal className="max-w-3xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-medium-blue uppercase">
            Why TEK exists
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-dark-neutral sm:text-4xl lg:text-5xl">
            Built for belonging - and the growth that follows
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08} className="mt-6 max-w-3xl">
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            Too often, tech communities ask students to compete. We built
            one where engineers, designers, PMs, and builders grow together
            -
            professionally, technically, and as friends.
          </p>
        </AnimatedReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl bg-card p-6 shadow-soft sm:p-7"
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${pillar.accent}`}
              >
                <pillar.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-dark-neutral">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
