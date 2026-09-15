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
  image?: string;
  imagePosition?: string;
  resources?: { label: string; href: string }[];
}

const gradients = [
  "from-dark-blue to-medium-blue",
  "from-medium-blue to-light-blue",
  "from-dark-neutral to-dark-blue",
  "from-dark-blue/90 to-maroon/80",
  "from-maroon/70 to-dark-blue",
  "from-dark-neutral to-medium-blue",
] as const;

export const events: TekEvent[] = [
  {
    id: "summer-retreat-2026",
    title: "TEK Summer Retreat",
    date: "August 14 - 16, 2026",
    time: "Multi-day",
    location: "Vermont",
    description:
      "A weekend away to recharge, bond, and kick off the year together.",
    category: "social",
    status: "past",
    imageGradient: gradients[0],
    image: "/photos/events/summer-retreat.jpg",
  },
  {
    id: "game-night-big-little-2026",
    title: "TEK Big-Little Reveal",
    date: "May 1, 2026",
    time: "7:00 PM - 9:30 PM",
    location: "Maple",
    description:
      "Games, laughs, and the big-little reveal that ties the family together.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
    image: "/photos/events/big-little.jpg",
  },
  {
    id: "tek-x-vc-2026",
    title: "TEK x VC",
    date: "April 29, 2026",
    time: "7:30 PM - 9:00 PM",
    location: "ILC",
    description:
      "A conversation with venture capital - how startups get built and funded.",
    category: "professional",
    status: "past",
    imageGradient: gradients[2],
    image: "/photos/events/tek-x-vc.jpg",
  },
  {
    id: "basketball-tournament-2026",
    title: "TEK Basketball Tournament",
    date: "April 27, 2026",
    time: "7:00 PM - 8:30 PM",
    location: "Central",
    description: "Friendly competition and community energy on the court.",
    category: "social",
    status: "past",
    imageGradient: gradients[3],
    image: "/photos/events/basketball-tournament.jpg",
  },
  {
    id: "hike-lake-lunch-2026",
    title: "TEK Hike + Lake Lunch",
    date: "April 25, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Mount Holyoke",
    description:
      "A day outdoors with TEK - hike, lunch by the lake, and good company.",
    category: "social",
    status: "past",
    imageGradient: gradients[4],
    image: "/photos/events/hike-lake-lunch.jpg",
  },
  {
    id: "bid-night-2026",
    title: "TEK Bid Night",
    date: "April 24, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "CS Building",
    description: "The night new members officially join the TEK family.",
    category: "social",
    status: "past",
    imageGradient: gradients[5],
    image: "/photos/events/bid-night.jpg",
  },
  {
    id: "resume-review-2026",
    title: "TEK Resume Review Night",
    date: "April 22, 2026",
    time: "7:00 PM - 8:30 PM",
    location: "ILC",
    description:
      "Peer and mentor feedback to sharpen resumes for internships and full-time roles.",
    category: "professional",
    status: "past",
    imageGradient: gradients[0],
    image: "/photos/events/resume-review.jpg",
  },
  {
    id: "theta-tau-cleanup-2026",
    title: "TEK x Theta Tau Cleanup",
    date: "April 18, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Various locations around campus",
    description:
      "Giving back with Theta Tau - cleaning up campus and the surrounding community.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
    image: "/photos/events/theta-tau-cleanup.jpg",
  },
  {
    id: "open-recruitment-3-2026",
    title: "TEK Casino Night",
    date: "March 30, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ILC",
    description:
      "The final open recruitment night - games, energy, and meeting the community.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
    image: "/photos/events/casino-night.jpg",
  },
  {
    id: "open-recruitment-2-2026",
    title: "TEK Jeopardy",
    date: "March 26, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ILC",
    description:
      "A competitive Jeopardy night for prospective members to meet TEK.",
    category: "social",
    status: "past",
    imageGradient: gradients[2],
    image: "/photos/events/jeopardy.jpg",
  },
  {
    id: "open-recruitment-1-2026",
    title: "TEK Panel + Networking",
    date: "March 25, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ILC",
    description:
      "Hear from members, ask questions, and start connecting with TEK.",
    category: "professional",
    status: "past",
    imageGradient: gradients[3],
    image: "/photos/events/panel-networking.jpg",
  },
  {
    id: "fireside-clarinda-2026",
    title: "TEK Fireside Chat with Clarinda",
    date: "March 6, 2026",
    time: "7:15 PM - 8:30 PM",
    location: "Elm",
    description:
      "An intimate fireside chat with Clarinda on careers and life in tech at AWS.",
    category: "professional",
    status: "past",
    imageGradient: gradients[5],
    image: "/photos/events/fireside-clarinda.jpg",
  },
  {
    id: "white-elephant-2025",
    title: "TEK White Elephant",
    date: "December 4, 2025",
    time: "7:45 PM - 11:00 PM",
    location: "Coolidge",
    description: "Holiday gift exchange, laughs, and end-of-semester vibes.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
    image: "/photos/events/white-elephant.jpg",
    imagePosition: "object-[center_82%]",
  },
  {
    id: "volleyball-semis-2025",
    title: "TEK Volleyball Semis",
    date: "October 29, 2025",
    time: "9:30 PM - 10:30 PM",
    location: "Boyden",
    description: "Semifinals energy - TEK competing together on the court.",
    category: "social",
    status: "past",
    imageGradient: gradients[2],
    image: "/photos/events/volleyball-playoffs.jpg",
  },
  {
    id: "volleyball-playoffs-2025",
    title: "TEK Volleyball Playoffs",
    date: "October 27, 2025",
    time: "9:30 PM - 11:30 PM",
    location: "Boyden",
    description: "Playoff night at Boyden - show up, cheer, and compete.",
    category: "social",
    status: "past",
    imageGradient: gradients[3],
    image: "/photos/events/volleyball-semis.jpg",
  },
  {
    id: "instacart-cto-2025",
    title: "TEK x Instacart CTO",
    date: "October 6, 2025",
    time: "8:00 PM - 9:00 PM",
    location: "Elm",
    description:
      "A conversation with Instacart's CTO on leadership, product, and building at scale.",
    category: "professional",
    status: "past",
    imageGradient: gradients[0],
    image: "/photos/events/instacart-cto.jpg",
    imagePosition: "object-[center_55%]",
  },
  {
    id: "volleyball-game-2025",
    title: "TEK Volleyball Game",
    date: "October 2, 2025",
    time: "8:30 PM - 9:30 PM",
    location: "Boyden",
    description: "TEK on the court for a midweek volleyball game.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
    image: "/photos/events/volleyball-game.jpg",
  },
  {
    id: "professional-pictures-2025",
    title: "TEK Professional Pictures",
    date: "September 29, 2025",
    time: "7:00 PM - 8:00 PM",
    location: "Elm",
    description:
      "Headshots and professional photos for LinkedIn, resumes, and recruitment.",
    category: "professional",
    status: "past",
    imageGradient: gradients[2],
    image: "/photos/events/professional-pictures.jpg",
  },
  {
    id: "eboard-hike-2025",
    title: "TEK E-Board Hike",
    date: "September 20, 2025",
    time: "11:00 AM - 12:00 PM",
    location: "Mount Sugarloaf",
    description: "E-board hike to kick off the year with fresh air and planning.",
    category: "social",
    status: "past",
    imageGradient: gradients[3],
    image: "/photos/events/eboard-hike.jpg",
    imagePosition: "object-[center_42%]",
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
