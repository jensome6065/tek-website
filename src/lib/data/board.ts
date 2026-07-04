export interface BoardMember {
  id: string;
  name: string;
  role: string;
  major: string;
  favoriteTech: string;
  favoriteMemory: string;
  linkedin: string;
  email: string;
  initials: string;
  accent: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "President",
    major: "Computer Science",
    favoriteTech: "TypeScript",
    favoriteMemory: "Our first retreat - watching strangers become a family overnight.",
    linkedin: "https://linkedin.com",
    email: "priya@umasstek.org",
    initials: "PS",
    accent: "from-dark-blue to-medium-blue",
  },
  {
    id: "2",
    name: "Ethan Brooks",
    role: "Vice President",
    major: "Computer Engineering",
    favoriteTech: "Rust",
    favoriteMemory: "Winning HackUMass as a first-year with a team I met at TEK.",
    linkedin: "https://linkedin.com",
    email: "ethan@umasstek.org",
    initials: "EB",
    accent: "from-medium-blue to-light-blue",
  },
  {
    id: "3",
    name: "Maya Okonkwo",
    role: "Director of Community",
    major: "Informatics",
    favoriteTech: "Figma",
    favoriteMemory: "Late-night study sessions that somehow always end in laughter.",
    linkedin: "https://linkedin.com",
    email: "maya@umasstek.org",
    initials: "MO",
    accent: "from-dark-neutral to-dark-blue",
  },
  {
    id: "4",
    name: "Lucas Nguyen",
    role: "Director of Professional Development",
    major: "CS + Economics",
    favoriteTech: "Python",
    favoriteMemory: "Seeing a member land their first internship after a mock interview.",
    linkedin: "https://linkedin.com",
    email: "lucas@umasstek.org",
    initials: "LN",
    accent: "from-maroon/80 to-dark-blue",
  },
  {
    id: "5",
    name: "Hannah Kim",
    role: "Director of Events",
    major: "Computer Science",
    favoriteTech: "React",
    favoriteMemory: "Company visit day - watching members light up in real offices.",
    linkedin: "https://linkedin.com",
    email: "hannah@umasstek.org",
    initials: "HK",
    accent: "from-dark-blue to-dark-neutral",
  },
  {
    id: "6",
    name: "Diego Alvarez",
    role: "Director of Technical Projects",
    major: "Computer Science",
    favoriteTech: "Go",
    favoriteMemory: "Project Build Night when three teams shipped MVPs in one evening.",
    linkedin: "https://linkedin.com",
    email: "diego@umasstek.org",
    initials: "DA",
    accent: "from-medium-blue to-dark-blue",
  },
  {
    id: "7",
    name: "Amelia Foster",
    role: "Director of Marketing",
    major: "Communications + CS",
    favoriteTech: "Next.js",
    favoriteMemory: "Launching our first website and watching applications pour in.",
    linkedin: "https://linkedin.com",
    email: "amelia@umasstek.org",
    initials: "AF",
    accent: "from-light-blue to-medium-blue",
  },
  {
    id: "8",
    name: "Ryan Patel",
    role: "Treasurer",
    major: "Finance + CS",
    favoriteTech: "SQL",
    favoriteMemory: "Securing our first sponsor and celebrating with the whole board.",
    linkedin: "https://linkedin.com",
    email: "ryan@umasstek.org",
    initials: "RP",
    accent: "from-dark-neutral to-medium-blue",
  },
];
