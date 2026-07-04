import Link from "next/link";
import { upcomingEvents } from "@/lib/data/events";
import { EventCard } from "@/components/shared/event-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export function UpcomingEvents() {
  return (
    <section className="bg-background-warm py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="What's next"
            title="Upcoming Events"
            description="From coffee chats to networking nights - there's always something happening."
          />
          <Button asChild variant="secondary" className="shrink-0 self-start sm:self-auto">
            <Link href="/community#events">View all events</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.slice(0, 4).map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
