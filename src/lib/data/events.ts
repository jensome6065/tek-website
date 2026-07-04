export type EventCategory = "all" | "social" | "professional" | "technical";

export interface TekEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: Exclude<EventCategory, "all">;
  status: "upcoming" | "past";
  imageGradient: string;
  resources?: { label: string; href: string }[];
}

export const events: TekEvent[] = [
  {
    id: "1",
    title: "Spring Networking Night",
    date: "March 12, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Campus Center Ballroom",
    description:
      "Meet recruiters and alumni from companies across tech. Practice your pitch, build connections, and learn what roles are hiring.",
    category: "professional",
    status: "upcoming",
    imageGradient: "from-dark-blue to-medium-blue",
  },
  {
    id: "2",
    title: "Project Build Night",
    date: "March 18, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "LGRT 201",
    description:
      "Bring an idea or join a team. We provide space, snacks, and mentorship for members building side projects and startup prototypes.",
    category: "technical",
    status: "upcoming",
    imageGradient: "from-medium-blue to-light-blue",
  },
  {
    id: "3",
    title: "Coffee Chat Series",
    date: "March 20, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Peet's Coffee, Amherst",
    description:
      "Small-group conversations with members across years and majors. No agenda - just good people and better coffee.",
    category: "social",
    status: "upcoming",
    imageGradient: "from-dark-neutral to-dark-blue",
  },
  {
    id: "4",
    title: "Resume Workshop",
    date: "March 25, 2026",
    time: "5:30 PM - 7:00 PM",
    location: "ILC S211",
    description:
      "Peer reviews and alumni feedback to help you refine your resume for internships and full-time roles.",
    category: "professional",
    status: "upcoming",
    imageGradient: "from-dark-blue/90 to-maroon/80",
  },
  {
    id: "5",
    title: "Winter Retreat",
    date: "January 18, 2026",
    time: "All Day",
    location: "Berkshires",
    description:
      "A weekend away from campus to recharge, bond, and plan the semester together.",
    category: "social",
    status: "past",
    imageGradient: "from-medium-blue to-dark-blue",
    resources: [{ label: "Photo Recap", href: "#" }],
  },
  {
    id: "6",
    title: "HackUMass Kickoff",
    date: "November 8, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Campus Center",
    description:
      "Team formation, idea brainstorming, and tips from past winners before the weekend begins.",
    category: "technical",
    status: "past",
    imageGradient: "from-dark-blue to-medium-blue",
    resources: [
      { label: "Slides", href: "#" },
      { label: "Photo Recap", href: "#" },
    ],
  },
  {
    id: "7",
    title: "Alumni Mentorship Mixer",
    date: "October 22, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "Student Union",
    description:
      "Connect with TEK alumni working at startups and big tech for advice on internships and career paths.",
    category: "professional",
    status: "past",
    imageGradient: "from-dark-neutral to-medium-blue",
    resources: [{ label: "Slides", href: "#" }],
  },
  {
    id: "8",
    title: "Movie Night: The Social Network",
    date: "October 10, 2025",
    time: "8:00 PM - 10:30 PM",
    location: "Hasbrouck 124",
    description:
      "Popcorn, blankets, and a classic tech film. Community first, always.",
    category: "social",
    status: "past",
    imageGradient: "from-maroon/70 to-dark-blue",
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
