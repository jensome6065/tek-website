"use client";

import { motion } from "framer-motion";
import type { MemberStory } from "@/lib/data/members";
import { cn } from "@/lib/utils";

interface MemberCardProps {
  member: MemberStory;
  index?: number;
  onReadMore?: (member: MemberStory) => void;
}

export function MemberCard({
  member,
  index = 0,
  onReadMore,
}: MemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div
        className={cn(
          "flex h-48 items-center justify-center bg-gradient-to-br",
          member.accent
        )}
      >
        <span className="text-4xl font-semibold tracking-tight text-white/90">
          {member.initials}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-maroon">{member.prompt}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-dark-neutral">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-medium-blue">
          {member.major} · Class of {member.graduationYear}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
          {member.excerpt}
        </p>
        <p className="mt-3 text-sm font-medium text-dark-neutral">
          {member.currentWork}
        </p>
        {onReadMore && (
          <button
            type="button"
            onClick={() => onReadMore(member)}
            className="mt-4 self-start text-sm font-medium text-maroon transition-colors hover:text-dark-blue"
          >
            Read More
          </button>
        )}
      </div>
    </motion.article>
  );
}
