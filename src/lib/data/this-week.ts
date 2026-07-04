/**
 * Homepage "This Week at TEK" announcements.
 * Shape is CMS-ready (Sanity / Notion)  -  swap this array for a fetch later.
 */
export type AnnouncementType =
  | "event"
  | "coffee-chat"
  | "study-night"
  | "recruitment"
  | "announcement"
  | "company-visit"
  | "workshop";

export interface WeeklyAnnouncement {
  id: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  type: AnnouncementType;
  href?: string;
}

export const announcementTypeLabels: Record<AnnouncementType, string> = {
  event: "Event",
  "coffee-chat": "Coffee Chat",
  "study-night": "Study Night",
  recruitment: "Recruitment",
  announcement: "Board",
  "company-visit": "Company Visit",
  workshop: "Workshop",
};

export const thisWeekAnnouncements: WeeklyAnnouncement[] = [
  {
    id: "1",
    title: "Spring Networking Night",
    description:
      "Meet alumni and recruiters in a low-pressure setting. Practice your intro and leave with real connections.",
    date: "2026-03-12",
    dateLabel: "Mar 12",
    type: "event",
    href: "/community#events",
  },
  {
    id: "2",
    title: "Coffee Chat Series",
    description:
      "Small-group conversations across years and majors. No agenda - just good people and better coffee.",
    date: "2026-03-14",
    dateLabel: "Mar 14",
    type: "coffee-chat",
    href: "/community",
  },
  {
    id: "3",
    title: "Midterm Study Night",
    description:
      "Quiet focus, shared snacks, and people who understand the grind. Bring your laptop and stay as long as you need.",
    date: "2026-03-16",
    dateLabel: "Mar 16",
    type: "study-night",
    href: "/community",
  },
  {
    id: "4",
    title: "Interest Form Closes Soon",
    description:
      "Fall recruitment interest forms close this week. Tell us a bit about yourself - no pressure, just the first step.",
    date: "2026-03-18",
    dateLabel: "Mar 18",
    type: "recruitment",
    href: "/recruitment",
  },
  {
    id: "5",
    title: "Board Office Hours",
    description:
      "Drop by to ask about families, events, or how to get more involved. Open to all members.",
    date: "2026-03-17",
    dateLabel: "Mar 17",
    type: "announcement",
    href: "/members#board",
  },
  {
    id: "6",
    title: "Resume Workshop",
    description:
      "Peer reviews and alumni feedback to help you refine your resume for internships and full-time roles.",
    date: "2026-03-19",
    dateLabel: "Mar 19",
    type: "workshop",
    href: "/community#events",
  },
];
