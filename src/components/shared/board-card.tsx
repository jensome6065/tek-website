"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import type { BoardMember } from "@/lib/data/board";
import { getMemberProfile } from "@/lib/data/member-profiles";
import { MemberAvatar } from "@/components/members/member-avatar";
import { LinkedInIcon } from "@/components/ui/icons";

interface BoardCardProps {
  member: BoardMember;
  index?: number;
}

export function BoardCard({ member, index = 0 }: BoardCardProps) {
  const profile = getMemberProfile(member.name);
  const photo = profile?.photo;
  const linkedin = profile?.linkedin ?? member.linkedin;
  const showLinkedIn = linkedin && linkedin !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <MemberAvatar
        name={member.name}
        photo={photo}
        initials={member.initials}
        accent={member.accent}
        className="h-56 transition-transform duration-500 group-hover:scale-105"
        initialsClassName="text-5xl"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-dark-neutral">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-maroon">{member.role}</p>
        <p className="mt-1 text-sm text-medium-blue">
          {member.major} · {member.graduationYear}
        </p>

        <div className="mt-5 flex gap-3">
          {showLinkedIn ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background-warm text-dark-blue transition-colors hover:bg-light-blue/30"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          ) : null}
          <a
            href={`mailto:${member.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background-warm text-dark-blue transition-colors hover:bg-light-blue/30"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
