"use client";

import { useMemo, useState } from "react";
import type { EventCategory, TekEvent } from "@/lib/data/events";
import { EventCard } from "@/components/shared/event-card";
import { cn } from "@/lib/utils";

const filters: { label: string; value: EventCategory }[] = [
  { label: "All", value: "all" },
  { label: "Social", value: "social" },
  { label: "Professional", value: "professional" },
  { label: "Technical", value: "technical" },
];

interface EventsFilterProps {
  events: TekEvent[];
  title: string;
}

export function EventsFilter({ events, title }: EventsFilterProps) {
  const [active, setActive] = useState<EventCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return events;
    return events.filter((event) => event.category === active);
  }, [active, events]);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
          {title}
        </h2>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter events"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === filter.value
                  ? "bg-brand text-white shadow-soft"
                  : "bg-card text-muted shadow-soft hover:text-dark-neutral"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-muted">No events in this category yet.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
