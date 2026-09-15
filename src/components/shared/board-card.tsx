"use client";

import { Mail } from "lucide-react";
import type { BoardMember } from "@/lib/data/members";
import { MemberAvatar } from "@/components/members/member-avatar";
import { LinkedInIcon } from "@/components/ui/icons";

interface BoardCardProps {
  member: BoardMember;
  index?: number;
}

export function BoardCard({ member }: BoardCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated motion-reduce:hover:translate-y-0">
      <MemberAvatar
        name={member.name}
        photo={member.photo}
        initials={member.initials}
        accent={member.accent}
        className="h-56 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background-warm text-dark-blue transition-colors hover:bg-light-blue/30"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon className="h-4 w-4" aria-hidden />
            </a>
          ) : null}
          <a
            href={`mailto:${member.email}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background-warm text-dark-blue transition-colors hover:bg-light-blue/30"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
