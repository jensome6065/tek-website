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
  },
  {
    id: "game-night-big-little-2026",
    title: "TEK Game Night & Big-Little Reveal",
    date: "May 1, 2026",
    time: "7:00 PM - 9:30 PM",
    location: "Maple",
    description:
      "Games, laughs, and the big-little reveal that ties the family together.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
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
  },
  {
    id: "basketball-tournament-2026",
    title: "TEK Social: Basketball Tournament",
    date: "April 27, 2026",
    time: "7:00 PM - 8:30 PM",
    location: "Central outdoor basketball court",
    description: "Friendly competition and community energy on the court.",
    category: "social",
    status: "past",
    imageGradient: gradients[3],
  },
  {
    id: "hike-lake-lunch-2026",
    title: "TEK Social: Hike + Lake Lunch",
    date: "April 25, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Mount Holyoke",
    description:
      "A day outdoors with TEK - hike, lunch by the lake, and good company.",
    category: "social",
    status: "past",
    imageGradient: gradients[4],
  },
  {
    id: "bid-night-2026",
    title: "TEK Bid Night",
    date: "April 24, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Manning Building",
    description: "The night new members officially join the TEK family.",
    category: "social",
    status: "past",
    imageGradient: gradients[5],
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
  },
  {
    id: "open-recruitment-3-2026",
    title: "TEK Open Recruitment #3: Casino Night",
    date: "March 30, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ILC",
    description:
      "The final open recruitment night - games, energy, and meeting the community.",
    category: "social",
    status: "past",
    imageGradient: gradients[1],
  },
  {
    id: "open-recruitment-2-2026",
    title: "TEK Open Recruitment #2: Jeopardy",
    date: "March 26, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ILC",
    description:
      "A competitive Jeopardy night for prospective members to meet TEK.",
    category: "social",
    status: "past",
    imageGradient: gradients[2],
  },
  {
    id: "open-recruitment-1-2026",
    title: "TEK Open Recruitment #1: Panel + Networking",
    date: "March 25, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "ILC",
    description:
      "Hear from members, ask questions, and start connecting with TEK.",
    category: "professional",
    status: "past",
    imageGradient: gradients[3],
  },
  {
    id: "poker-night-2026",
    title: "TEK Poker Night",
    date: "March 6, 2026",
    time: "8:30 PM - 10:00 PM",
    location: "Elm",
    description: "Cards, conversation, and a late-night hang with TEK.",
    category: "social",
    status: "past",
    imageGradient: gradients[4],
  },
  {
    id: "fireside-clarinda-2026",
    title: "TEK Fireside Chat with Clarinda",
    date: "March 6, 2026",
    time: "7:15 PM - 8:30 PM",
    location: "AWS",
    description:
      "An intimate fireside chat with Clarinda on careers and life in tech at AWS.",
    category: "professional",
    status: "past",
    imageGradient: gradients[5],
  },
  {
    id: "study-night-elm-2026",
    title: "TEK Study Night",
    date: "February 18, 2026",
    time: "7:15 PM - 9:00 PM",
    location: "Elm",
    description:
      "Focused study time with TEK - quieter grind, shared snacks, better company.",
    category: "technical",
    status: "past",
    imageGradient: gradients[0],
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
  },
  {
    id: "rock-climbing-ascend-2025",
    title: "TEK Rock Climbing / Study",
    date: "October 22, 2025",
    time: "7:00 PM - 8:00 PM",
    location: "Ascend",
    description:
      "Climb, then reset with study time - a hybrid night at Ascend.",
    category: "social",
    status: "past",
    imageGradient: gradients[4],
  },
  {
    id: "study-night-union-2025",
    title: "TEK Study Night",
    date: "October 7, 2025",
    time: "8:00 PM - 9:00 PM",
    location: "Student Union",
    description: "Mid-semester study night with people who get the grind.",
    category: "technical",
    status: "past",
    imageGradient: gradients[5],
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
  },
];

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
