export type StoryPrompt =
  | "Why I Joined TEK"
  | "My Favorite TEK Memory"
  | "What I Built Through TEK"
  | "My Internship Journey"
  | "How TEK Helped Me Find My Community";

export interface MemberStory {
  id: string;
  name: string;
  major: string;
  graduationYear: string;
  currentWork: string;
  prompt: StoryPrompt;
  excerpt: string;
  initials: string;
  accent: string;
  featured?: boolean;
}

export interface CommunityMember {
  id: string;
  name: string;
  major: string;
  graduationYear: string;
  focus: string;
  initials: string;
  accent: string;
}

/** Featured stories  -  homepage and Members page. */
export const memberStories: MemberStory[] = [
  {
    id: "1",
    name: "Aisha Patel",
    major: "Computer Science",
    graduationYear: "2027",
    currentWork: "SWE Intern at Stripe",
    prompt: "My Internship Journey",
    excerpt:
      "I practiced my first mock interview with a TEK alum on a Tuesday night. Two months later, I was walking into Stripe for my internship - still texting that same group chat.",
    initials: "AP",
    accent: "from-dark-blue to-medium-blue",
    featured: true,
  },
  {
    id: "2",
    name: "Marcus Chen",
    major: "Informatics",
    graduationYear: "2026",
    currentWork: "Building a campus events app",
    prompt: "What I Built Through TEK",
    excerpt:
      "Project Build Nights gave me teammates who cared as much as I did. We shipped a campus events app that students actually use - and I found my co-founders.",
    initials: "MC",
    accent: "from-medium-blue to-light-blue",
  },
  {
    id: "3",
    name: "Sofia Ramirez",
    major: "Computer Engineering",
    graduationYear: "2028",
    currentWork: "Product Intern at Notion",
    prompt: "How TEK Helped Me Find My Community",
    excerpt:
      "I transferred mid-year and didn't know anyone. A coffee chat turned into a family group, and suddenly campus felt like home.",
    initials: "SR",
    accent: "from-dark-neutral to-dark-blue",
  },
  {
    id: "4",
    name: "Jordan Lee",
    major: "CS + Business",
    graduationYear: "2026",
    currentWork: "Founder, StudySync",
    prompt: "Why I Joined TEK",
    excerpt:
      "I wanted more than resume workshops. I wanted people who would build with me, celebrate with me, and still show up for study night when things got hard.",
    initials: "JL",
    accent: "from-maroon/80 to-dark-blue",
  },
];

/** Broader member directory  -  update as the community grows. */
export const communityMembers: CommunityMember[] = [
  {
    id: "m1",
    name: "Aisha Patel",
    major: "Computer Science",
    graduationYear: "2027",
    focus: "Software engineering",
    initials: "AP",
    accent: "from-dark-blue to-medium-blue",
  },
  {
    id: "m2",
    name: "Marcus Chen",
    major: "Informatics",
    graduationYear: "2026",
    focus: "Product & startups",
    initials: "MC",
    accent: "from-medium-blue to-light-blue",
  },
  {
    id: "m3",
    name: "Sofia Ramirez",
    major: "Computer Engineering",
    graduationYear: "2028",
    focus: "Product design",
    initials: "SR",
    accent: "from-dark-neutral to-dark-blue",
  },
  {
    id: "m4",
    name: "Jordan Lee",
    major: "CS + Business",
    graduationYear: "2026",
    focus: "Entrepreneurship",
    initials: "JL",
    accent: "from-maroon/80 to-dark-blue",
  },
  {
    id: "m5",
    name: "Nina Okonkwo",
    major: "Computer Science",
    graduationYear: "2027",
    focus: "Full-stack development",
    initials: "NO",
    accent: "from-medium-blue to-dark-blue",
  },
  {
    id: "m6",
    name: "Chris Park",
    major: "Mathematics + CS",
    graduationYear: "2028",
    focus: "Machine learning",
    initials: "CP",
    accent: "from-dark-blue to-dark-neutral",
  },
  {
    id: "m7",
    name: "Elena Vasquez",
    major: "Biomedical Engineering",
    graduationYear: "2027",
    focus: "Health tech",
    initials: "EV",
    accent: "from-light-blue to-medium-blue",
  },
  {
    id: "m8",
    name: "Samir Khan",
    major: "Computer Science",
    graduationYear: "2026",
    focus: "Systems & infrastructure",
    initials: "SK",
    accent: "from-dark-neutral to-medium-blue",
  },
  {
    id: "m9",
    name: "Taylor Brooks",
    major: "Informatics",
    graduationYear: "2029",
    focus: "UX research",
    initials: "TB",
    accent: "from-maroon/70 to-medium-blue",
  },
  {
    id: "m10",
    name: "Alex Rivera",
    major: "Mechanical Engineering",
    graduationYear: "2028",
    focus: "Hardware & robotics",
    initials: "AR",
    accent: "from-dark-blue to-light-blue",
  },
  {
    id: "m11",
    name: "Priya Desai",
    major: "CS + Economics",
    graduationYear: "2027",
    focus: "Fintech",
    initials: "PD",
    accent: "from-medium-blue to-dark-neutral",
  },
  {
    id: "m12",
    name: "Jamie Wu",
    major: "Computer Science",
    graduationYear: "2029",
    focus: "Mobile development",
    initials: "JW",
    accent: "from-dark-neutral to-dark-blue",
  },
];

/** @deprecated Use memberStories */
export type MemberSpotlight = MemberStory;
export const memberSpotlights = memberStories;
