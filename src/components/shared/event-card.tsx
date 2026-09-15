"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { TekEvent } from "@/lib/data/events";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: TekEvent;
  index?: number;
}

const categoryLabels = {
  social: "Social",
  professional: "Professional",
  technical: "Technical",
};

export function EventCard({ event, index = 0 }: EventCardProps) {
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
          "relative h-48 overflow-hidden p-5",
          event.image
            ? "bg-dark-neutral"
            : `bg-gradient-to-br ${event.imageGradient}`
        )}
      >
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              event.imagePosition
            )}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <span className="relative z-10 inline-flex rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {categoryLabels[event.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-dark-neutral group-hover:text-dark-blue transition-colors">
          {event.title}
        </h3>
        <ul className="mt-5 space-y-2 text-sm text-dark-neutral/80">
          <li className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-medium-blue" aria-hidden />
            {event.date}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-medium-blue" aria-hidden />
            {event.time}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-medium-blue" aria-hidden />
            {event.location}
          </li>
        </ul>
        {event.resources && event.resources.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.resources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="text-sm font-medium text-maroon hover:underline"
              >
                {resource.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
