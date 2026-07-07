"use client";

import { motion } from "framer-motion";
import type { CommunityMember } from "@/lib/data/members";
import { MemberAvatar } from "@/components/members/member-avatar";
import { cn } from "@/lib/utils";

interface CommunityMemberCardProps {
  member: CommunityMember;
  index?: number;
}

const cohortLabels = {
  founding: "Founding",
  alpha: "Alpha",
} as const;

const cardClassName =
  "block overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow duration-300";

export function CommunityMemberCard({
  member,
  index = 0,
}: CommunityMemberCardProps) {
  const isInactive = member.status === "inactive";
  const hasLinkedIn = Boolean(member.linkedin);

  const motionProps = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: {
      duration: 0.45,
      delay: index * 0.04,
      ease: [0.22, 1, 0.36, 1] as const,
    },
    whileHover: hasLinkedIn && !isInactive ? { y: -3 } : undefined,
    className: cn(
      cardClassName,
      isInactive ? "opacity-80" : "hover:shadow-elevated",
      hasLinkedIn && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    ),
  };

  const content = (
    <>
      <MemberAvatar
        name={member.name}
        photo={member.photo}
        initials={member.initials}
        accent={member.accent}
        className="h-32"
        initialsClassName="text-2xl"
        imageClassName="object-[center_20%]"
        muted={isInactive}
      />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold tracking-tight text-dark-neutral">
            {member.name}
          </h3>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              member.cohort === "founding"
                ? "bg-maroon/10 text-maroon"
                : "bg-light-blue/25 text-dark-blue"
            )}
          >
            {cohortLabels[member.cohort]}
          </span>
        </div>
        <p className="mt-1 text-sm text-medium-blue">
          {member.major} · {member.graduationYear}
        </p>
        {member.focus ? (
          <p className="mt-2 text-sm text-muted">{member.focus}</p>
        ) : null}
      </div>
    </>
  );

  if (hasLinkedIn) {
    return (
      <motion.a
        {...motionProps}
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
      >
        {content}
      </motion.a>
    );
  }

  return <motion.article {...motionProps}>{content}</motion.article>;
}
