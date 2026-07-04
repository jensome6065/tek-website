"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MemberStory } from "@/lib/data/members";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Portrait({
  member,
  size = "md",
}: {
  member: MemberStory;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br",
        member.accent,
        size === "lg" ? "h-full min-h-64 sm:min-h-80" : "h-44"
      )}
    >
      <span
        className={cn(
          "font-semibold tracking-tight text-white/90",
          size === "lg" ? "text-6xl" : "text-4xl"
        )}
      >
        {member.initials}
      </span>
    </div>
  );
}

function StoryMeta({ member }: { member: MemberStory }) {
  return (
    <>
      <p className="text-sm font-medium text-maroon">{member.prompt}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-dark-neutral">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-medium-blue">
        {member.major} · Class of {member.graduationYear}
      </p>
      <p className="mt-1 text-sm text-muted">{member.currentWork}</p>
    </>
  );
}

function StoryCard({
  member,
  index,
  onReadMore,
}: {
  member: MemberStory;
  index: number;
  onReadMore: (member: MemberStory) => void;
}) {
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
      <Portrait member={member} />
      <div className="flex flex-1 flex-col p-6">
        <StoryMeta member={member} />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {member.excerpt}
        </p>
        <button
          type="button"
          onClick={() => onReadMore(member)}
          className="mt-4 self-start text-sm font-medium text-maroon transition-colors hover:text-dark-blue"
        >
          Read More
        </button>
      </div>
    </motion.article>
  );
}

function FeaturedStory({
  member,
  onReadMore,
}: {
  member: MemberStory;
  onReadMore: (member: MemberStory) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 overflow-hidden rounded-3xl bg-card shadow-soft sm:mb-10"
    >
      <div className="grid lg:grid-cols-2">
        <Portrait member={member} size="lg" />
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
            Featured story
          </p>
          <StoryMeta member={member} />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {member.excerpt}
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-8 self-start"
            onClick={() => onReadMore(member)}
          >
            Read More
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function StoryModal({
  member,
  onClose,
}: {
  member: MemberStory | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-card p-8 shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={cn(
                "mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br",
                member.accent
              )}
            >
              <span className="text-2xl font-semibold text-white/90">
                {member.initials}
              </span>
            </div>
            <p className="text-sm font-medium text-maroon">{member.prompt}</p>
            <h2
              id="story-modal-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-dark-neutral"
            >
              {member.name}
            </h2>
            <p className="mt-1 text-sm text-medium-blue">
              {member.major} · Class of {member.graduationYear}
            </p>
            <p className="mt-1 text-sm text-muted">{member.currentWork}</p>
            <p className="mt-6 leading-relaxed text-dark-neutral/90">
              {member.excerpt}
            </p>
            <p className="mt-4 text-sm text-muted">
              Full stories coming soon - this is a preview of the voices that make
              TEK feel like home.
            </p>
            <Button
              type="button"
              variant="secondary"
              className="mt-8"
              onClick={onClose}
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MemberStoriesSectionProps {
  stories: MemberStory[];
}

export function MemberStoriesSection({ stories }: MemberStoriesSectionProps) {
  const [active, setActive] = useState<MemberStory | null>(null);
  const featured = stories.find((story) => story.featured) ?? stories[0];
  const others = stories.filter((story) => story.id !== featured.id);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <FeaturedStory member={featured} onReadMore={setActive} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((member, index) => (
          <StoryCard
            key={member.id}
            member={member}
            index={index}
            onReadMore={setActive}
          />
        ))}
      </div>
      <StoryModal member={active} onClose={() => setActive(null)} />
    </>
  );
}
