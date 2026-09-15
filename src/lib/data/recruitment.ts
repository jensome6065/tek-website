/** Homepage live signal - set `active: false` to hide the strip. */
export const recruitmentSignal = {
  active: true,
  label: "Fall '26 Recruitment",
  detail: "Beta class recruitment soon",
  href: "/recruitment",
  cta: "Learn more",
} as const;

export const recruitmentSteps = [
  {
    title: "Application",
    description:
      "Share your story, interests, and why you want to join TEK. Follow us for the link when applications open.",
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
    title: "Interviews",
    description:
      "A conversation, not an interrogation. We want to know who you are.",
  },
  {
    title: "Offers",
    description:
      "If it's a mutual fit, you'll receive an invitation to join TEK.",
  },
];

export const importantDates = [
  { label: "Applications Due", date: "TBA" },
  { label: "Open Events", date: "TBA" },
  { label: "Closed Events", date: "TBA" },
  { label: "Interviews", date: "TBA" },
  { label: "Offers Released", date: "TBA" },
];

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
      "Apply, attend open events, then invite-only closed events and interviews. We designed it to be thoughtful - not stressful.",
  },
  {
    question: "What's the difference between open and closed events?",
    answer:
      "Open events are for anyone interested in joining. Closed events are invite-only for applicants who advance past open recruitment.",
  },
  {
    question: "When does recruitment happen?",
    answer:
      "We recruit primarily at the start of the fall semester, with opportunities in the spring depending on capacity. Exact dates will be announced soon.",
  },
  {
    question: "Can I still attend events if I'm not a member?",
    answer:
      "Some events are open to the broader campus community. Follow us on Instagram or join our interest list to stay informed.",
  },
];
