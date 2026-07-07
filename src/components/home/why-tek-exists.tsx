"use client";

import { Code2, HeartHandshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

const pillars = [
  {
    title: "Build Together",
    description:
      "Hackathons, project nights, technical workshops, startup ideas, engineering collaboration, product design, and opportunities to create alongside other passionate students.",
    icon: Code2,
  },
  {
    title: "Grow Together",
    description:
      "Resume workshops, mock interviews, alumni mentorship, recruiter events, internship preparation, speaker panels, and career development opportunities that help members reach the next level.",
    icon: TrendingUp,
  },
  {
    title: "Belong Together",
    description:
      "Coffee chats, study nights, retreats, family groups, game nights, movie marathons, dinners, and traditions that transform classmates into lifelong friends.",
    icon: HeartHandshake,
  },
];

export function WhyTekExists() {
  return (
    <section className="bg-background-warm py-20 sm:py-28">
      <div className="container-page">
        <AnimatedReveal className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-dark-neutral sm:text-4xl lg:text-5xl">
            Why TEK Exists
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1} className="mt-10 max-w-4xl">
          <blockquote className="text-2xl font-semibold leading-snug tracking-tight text-dark-blue sm:text-3xl lg:text-4xl lg:leading-tight">
            Too often, technology communities ask students to compete. We
            built one that helps them belong.
          </blockquote>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            TEK was founded to create the community we wished existed at UMass
            Amherst - a place where engineers, designers, product managers,
            founders, builders, and innovators can grow professionally while
            forming genuine friendships. We believe the best careers are built
            through collaboration, mentorship, and shared experiences, not
            competition.
          </p>
        </AnimatedReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue/25 text-dark-blue">
                <pillar.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-dark-neutral">
                {pillar.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
