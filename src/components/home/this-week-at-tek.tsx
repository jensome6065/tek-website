"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  announcementTypeLabels,
  thisWeekAnnouncements,
  type WeeklyAnnouncement,
} from "@/lib/data/this-week";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

const typeStyles: Record<WeeklyAnnouncement["type"], string> = {
  event: "bg-dark-blue/10 text-dark-blue",
  "coffee-chat": "bg-medium-blue/15 text-medium-blue",
  "study-night": "bg-light-blue/40 text-dark-blue",
  recruitment: "bg-maroon/10 text-maroon",
  announcement: "bg-dark-neutral/10 text-dark-neutral",
  "company-visit": "bg-medium-blue/10 text-dark-blue",
  workshop: "bg-light-blue/30 text-dark-blue",
};

function AnnouncementCard({
  item,
  index,
}: {
  item: WeeklyAnnouncement;
  index: number;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
            typeStyles[item.type]
          )}
        >
          {announcementTypeLabels[item.type]}
        </span>
        <time
          dateTime={item.date}
          className="shrink-0 rounded-lg bg-background-warm px-2.5 py-1 text-xs font-semibold tabular-nums text-dark-neutral"
        >
          {item.dateLabel}
        </time>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-dark-neutral transition-colors group-hover:text-dark-blue">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
      {item.href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-maroon opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      )}
    </>
  );

  const className =
    "group flex h-full flex-col rounded-2xl bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated";

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
      whileHover={{ y: -4 }}
      className="h-full"
    >
      {item.href ? (
        <Link href={item.href} className={className}>
          {content}
        </Link>
      ) : (
        <div className={className}>{content}</div>
      )}
    </motion.article>
  );
}

export function ThisWeekAtTek() {
  return (
    <section className="bg-background-warm py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Stay in the loop"
          title="This Week at TEK"
          description="What's happening right now - events, deadlines, and moments worth showing up for."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {thisWeekAnnouncements.map((item, index) => (
            <AnnouncementCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
