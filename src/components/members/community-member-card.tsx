"use client";

import { motion } from "framer-motion";
import type { CommunityMember } from "@/lib/data/members";
import { cn } from "@/lib/utils";

interface CommunityMemberCardProps {
  member: CommunityMember;
  index?: number;
}

export function CommunityMemberCard({
  member,
  index = 0,
}: CommunityMemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div
        className={cn(
          "flex h-28 items-center justify-center bg-gradient-to-br",
          member.accent
        )}
      >
        <span className="text-2xl font-semibold tracking-tight text-white/90">
          {member.initials}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold tracking-tight text-dark-neutral">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-medium-blue">
          {member.major} · {member.graduationYear}
        </p>
        <p className="mt-2 text-sm text-muted">{member.focus}</p>
      </div>
    </motion.article>
  );
}
