/** Hero live line - set `active: false` to hide it. */
export const recruitmentSignal = {
  active: true,
  label: "Info night",
  detail: "Wed Oct 7, 6-7 PM · ILC",
  href: "/recruitment#info-night",
  cta: "Learn more",
} as const;

export const infoNight = {
  title: "Info Night",
  date: "Wednesday, October 7, 2026",
  time: "6-7 PM",
  location: "ILC (room TBA)",
  description:
    "Meet members, learn about Fall '26 recruitment, and ask anything about TEK. Applications open right after Info Night.",
} as const;

export const recruitmentSteps = [
  {
    title: "Application",
    description:
      "Applications open after Info Night on Oct 7. Share your story, interests, and why you want to join TEK.",
  },
  {
    title: "Open Events",
    description:
      "Attend our open recruitment events to meet members and learn what TEK is about.",
  },
  {
    title: "Closed Events",
    description:
      "Invite-only events for applicants advancing past open recruitment. A closer look at TEK before decisions.",
  },
  {
    title: "Offers",
    description:
      "If it's a mutual fit, you'll receive an invitation to join TEK.",
  },
];

export const importantDateGroups = [
  {
    title: "Kickoff",
    items: [
      {
        date: "Oct 7",
        title: "Info Night",
        detail: "6-7 PM · ILC (room TBA)",
      },
      {
        date: "Oct 7",
        title: "Applications Open",
        detail: "After Info Night",
      },
    ],
  },
  {
    title: "Open events",
    items: [
      {
        date: "Oct 13",
        title: "Panel + Networking",
        detail: "7-9 PM",
        tag: "Open",
      },
      {
        date: "Oct 13",
        title: "Applications Due",
        detail: "11:59 PM",
        tag: "Deadline",
      },
      {
        date: "Oct 15",
        title: "Game Night",
        detail: "7-9 PM",
        tag: "Open",
      },
    ],
  },
  {
    title: "Closed events",
    items: [
      {
        date: "Oct 16",
        title: "Closed event",
        detail: "Time & location TBA",
        tag: "Invite-only",
      },
      {
        date: "Oct 17",
        title: "Closed event",
        detail: "Time & location TBA",
        tag: "Invite-only",
      },
    ],
  },
  {
    title: "Offers",
    items: [
      {
        date: "Oct 18-24",
        title: "Offers Released",
      },
    ],
  },
] as const;

export const recruitmentFaqs = [
  {
    question: "Do I need prior experience to join?",
    answer:
      "No. TEK welcomes students at every stage - whether you're writing your first line of code or shipping your third side project. Curiosity and community matter more than credentials.",
  },
  {
    question: "Is TEK only for Computer Science majors?",
    answer:
      "Not at all. We include engineers, designers, product managers, founders, and anyone passionate about technology and building with others.",
  },
  {
    question: "How time-intensive is membership?",
    answer:
      "We ask members to show up consistently, but we also respect academics and life. Most members attend a few events each month and engage with their family group.",
  },
  {
    question: "What does the application process look like?",
    answer:
      "Apply, attend open events, then invite-only closed events. We designed it to be thoughtful - not stressful.",
  },
  {
    question: "What's the difference between open and closed events?",
    answer:
      "Open events are for anyone interested in joining. Closed events are invite-only for applicants who advance past open recruitment.",
  },
  {
    question: "When does recruitment happen?",
    answer:
      "Fall '26 Beta class recruitment runs in October. Info Night is Oct 7, applications are due Oct 13, and offers are released sometime during the week of Oct 18-24 - same time for everyone.",
  },
  {
    question: "Can I still attend events if I'm not a member?",
    answer:
      "Some events are open to the broader campus community. Follow us on Instagram or join our interest list to stay informed.",
  },
];
