export interface CommunityPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const communityPillars: CommunityPillar[] = [
  {
    id: "study-nights",
    title: "Study Nights",
    description:
      "Quiet focus, shared snacks, and people who understand the grind. Midterms feel lighter when you're not alone.",
    icon: "BookOpen",
  },
  {
    id: "coffee-chats",
    title: "Coffee Chats",
    description:
      "Small conversations that turn classmates into friends. No agenda - just genuine connection over coffee.",
    icon: "Coffee",
  },
  {
    id: "hackathons",
    title: "Hackathons",
    description:
      "Build something real with teammates who care. We form teams, share ideas, and support each other through the weekend.",
    icon: "Code2",
  },
  {
    id: "families",
    title: "Families",
    description:
      "Small groups that become your home base - mentorship, check-ins, and people who show up for you.",
    icon: "Home",
  },
  {
    id: "movie-nights",
    title: "Movie Nights",
    description:
      "Popcorn, blankets, and films that spark conversation. Community doesn't always need a whiteboard.",
    icon: "Clapperboard",
  },
  {
    id: "retreats",
    title: "Retreats",
    description:
      "Time away from campus to recharge, reflect, and deepen the bonds that make TEK feel like family.",
    icon: "Mountain",
  },
  {
    id: "company-visits",
    title: "Company Visits",
    description:
      "Step inside real tech workplaces. Meet engineers, designers, and PMs who were once in your shoes.",
    icon: "Building2",
  },
  {
    id: "mentorship",
    title: "Mentorship",
    description:
      "Guidance from upperclassmen and alumni who've navigated internships, interviews, and career decisions.",
    icon: "Handshake",
  },
  {
    id: "project-nights",
    title: "Project Build Nights",
    description:
      "Ship side projects, explore startup ideas, and learn by building alongside other passionate students.",
    icon: "Layers",
  },
];
