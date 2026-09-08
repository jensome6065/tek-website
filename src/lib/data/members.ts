import { getMemberProfile } from "@/lib/data/member-profiles";

export type MemberStatus = "active" | "inactive";
export type MemberCohort = "founding" | "alpha";

export interface CommunityMember {
  id: string;
  name: string;
  major: string;
  graduationYear: string;
  status: MemberStatus;
  cohort: MemberCohort;
  focus?: string;
  photo?: string;
  linkedin?: string;
  initials: string;
  accent: string;
}

const memberAccents = [
  "from-dark-blue to-medium-blue",
  "from-medium-blue to-light-blue",
  "from-dark-neutral to-dark-blue",
  "from-maroon/80 to-dark-blue",
  "from-dark-blue to-dark-neutral",
  "from-medium-blue to-dark-blue",
  "from-light-blue to-medium-blue",
  "from-dark-neutral to-medium-blue",
  "from-maroon/70 to-medium-blue",
  "from-dark-blue to-light-blue",
  "from-medium-blue to-dark-neutral",
] as const;

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const cohortOrder: Record<MemberCohort, number> = {
  founding: 0,
  alpha: 1,
};

function sortMembers(a: CommunityMember, b: CommunityMember): number {
  const cohortDiff = cohortOrder[a.cohort] - cohortOrder[b.cohort];
  if (cohortDiff !== 0) return cohortDiff;
  return a.name.localeCompare(b.name);
}

export function groupCommunityMembers(members: CommunityMember[]) {
  const active = members.filter((member) => member.status === "active").sort(sortMembers);
  const inactive = members
    .filter((member) => member.status === "inactive")
    .sort(sortMembers);

  return { active, inactive };
}

/** Broader member directory  -  update as the community grows. */
type MemberRosterEntry = Pick<
  CommunityMember,
  "name" | "major" | "graduationYear"
>;

const alphaClassMembers = new Set([
  "Sam Carroll",
  "Anthony Cooper",
  "Rahma Giwa",
  "Peter Hart",
  "Ansh Kanyadi",
  "Shritan Kondaveti",
  "Christine Kuan",
  "Adam Lubomirski",
  "Drew Marceau",
  "Yonathan Mesfin",
  "Vinh Nguyen",
  "Maryam Syeda",
  "Ari Thomas",
  "Shamba Upadhyay",
  "Anthony Yang",
  "Daisy Phung",
  "Chris Bouvier",
  "Gabe Morse",
  "Sydney Tor",
]);

const inactiveMembers = new Set([
  "Charlie Desmond",
  "Sue Gurung",
  "Kushaan Naskar",
  "Sara Kong",
  "Drew Marceau",
  "Rishabh Devnani",
  "Glenn Kule",
]);

function formatMajor(major: string): string {
  return major.replace(/Computer Science \+/g, "CS +");
}

const memberRoster: MemberRosterEntry[] = [
  { name: "Shally Albert", major: "Computer Science", graduationYear: "2028" },
  { name: "Sue Gurung", major: "Informatics", graduationYear: "2028" },
  { name: "Jennifer Ye", major: "Computer Science", graduationYear: "2028" },
  { name: "Grace Zhou", major: "Computer Science", graduationYear: "2028" },
  {
    name: "Charlie Desmond",
    major: "Computer Science + Math",
    graduationYear: "2028",
  },
  {
    name: "Samath Gurung",
    major: "Computer Science + Economics",
    graduationYear: "2028",
  },
  {
    name: "Isha Mukherjee",
    major: "Computer Science + Math",
    graduationYear: "2028",
  },
  { name: "Nish Methuku", major: "Computer Science", graduationYear: "2028" },
  {
    name: "Sara Kong",
    major: "Industrial Engineering + Math",
    graduationYear: "2028",
  },
  {
    name: "Yash Sawhney",
    major: "Computer Science + Economics",
    graduationYear: "2028",
  },
  { name: "Kushaan Naskar", major: "Computer Science", graduationYear: "2028" },
  {
    name: "Tiffany Zhang",
    major: "Biomedical Engineering",
    graduationYear: "2029",
  },
  { name: "Ben Hamilton", major: "Computer Science", graduationYear: "2027" },
  {
    name: "Ishani Saha",
    major: "Computer Science + Linguistics",
    graduationYear: "2028",
  },
  {
    name: "Aarohee Gondkar",
    major: "Computer Science + Psychology",
    graduationYear: "2028",
  },
  {
    name: "Vic Desouza",
    major: "Computer Science + Math",
    graduationYear: "2028",
  },
  { name: "Luan Meira", major: "Computer Science", graduationYear: "2028" },
  { name: "Adam Post", major: "Computer Science", graduationYear: "2028" },
  { name: "Chloe Le", major: "Computer Science", graduationYear: "2028" },
  { name: "Krish Reddy", major: "Computer Science", graduationYear: "2028" },
  { name: "Sylvia Shi Sidley", major: "Chemistry", graduationYear: "2028" },
  { name: "Sam Carroll", major: "Computer Science", graduationYear: "2027" },
  { name: "Anthony Cooper", major: "Informatics", graduationYear: "2029" },
  { name: "Rahma Giwa", major: "Computer Science", graduationYear: "2028" },
  { name: "Peter Hart", major: "Computer Science", graduationYear: "2029" },
  { name: "Ansh Kanyadi", major: "Computer Science", graduationYear: "2028" },
  { name: "Shritan Kondaveti", major: "Informatics", graduationYear: "2028" },
  {
    name: "Christine Kuan",
    major: "Electrical Engineering",
    graduationYear: "2028",
  },
  { name: "Adam Lubomirski", major: "Computer Science", graduationYear: "2028" },
  {
    name: "Drew Marceau",
    major: "Computer Science + Computational Linguistics",
    graduationYear: "2027",
  },
  { name: "Yonathan Mesfin", major: "Computer Science", graduationYear: "2029" },
  { name: "Vinh Nguyen", major: "Math + Physics", graduationYear: "2028" },
  {
    name: "Maryam Syeda",
    major: "Computer Engineering",
    graduationYear: "2029",
  },
  { name: "Ari Thomas", major: "CS + Stats & DS", graduationYear: "2029" },
  { name: "Shamba Upadhyay", major: "CS + Biology", graduationYear: "2028" },
  {
    name: "Anthony Yang",
    major: "Computer Science + Math",
    graduationYear: "2028",
  },
  { name: "Daisy Phung", major: "Computer Science", graduationYear: "2029" },
  { name: "Chris Bouvier", major: "Computer Science", graduationYear: "2029" },
  { name: "Gabe Morse", major: "OIM", graduationYear: "2029" },
  { name: "Sydney Tor", major: "Chemistry", graduationYear: "2027" },
  { name: "Rishabh Devnani", major: "Computer Science", graduationYear: "2026" },
  { name: "Glenn Kule", major: "Computer Science", graduationYear: "2028" },
];

export const communityMembers: CommunityMember[] = memberRoster.map(
  (member, index) => {
    const profile = getMemberProfile(member.name);

    return {
      id: `m${index + 1}`,
      ...member,
      major: formatMajor(member.major),
      status: inactiveMembers.has(member.name) ? "inactive" : "active",
      cohort: alphaClassMembers.has(member.name) ? "alpha" : "founding",
      photo: profile?.photo,
      linkedin: profile?.linkedin,
      initials: getInitials(member.name),
      accent: memberAccents[index % memberAccents.length],
    };
  }
);
