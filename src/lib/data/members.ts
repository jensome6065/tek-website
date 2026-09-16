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

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  major: string;
  graduationYear: string;
  linkedin?: string;
  email: string;
  photo?: string;
  initials: string;
  accent: string;
}

interface BoardRole {
  title: string;
  email: string;
  /** Display order on the executive board grid (ascending). */
  order: number;
}

/** Canonical member record — edit here only. */
interface MemberRecord {
  name: string;
  major: string;
  graduationYear: string;
  cohort: MemberCohort;
  status?: MemberStatus;
  photo?: string;
  linkedin?: string;
  board?: BoardRole;
}

const accents = [
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

function formatMajor(major: string): string {
  return major.replace(/Computer Science \+/g, "CS +");
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

/**
 * Single source of truth for TEK people.
 * Board roles, photos, and LinkedIn live on the same record as major/year/cohort.
 */
const roster: MemberRecord[] = [
  {
    name: "Shally Albert",
    major: "Informatics",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/shally.jpeg",
    linkedin: "https://www.linkedin.com/in/shally-albert/",
    board: {
      title: "President of Recruitment",
      email: "shallyalbert@umass.edu",
      order: 1,
    },
  },
  {
    name: "Sue Gurung",
    major: "Informatics",
    graduationYear: "2028",
    cohort: "founding",
    status: "inactive",
    photo: "/photos/members/founding/sue.jpeg",
    linkedin: "https://www.linkedin.com/in/sue-gurung/",
  },
  {
    name: "Jennifer Ye",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/jennifer.jpeg",
    linkedin: "https://www.linkedin.com/in/jenniferye1t/",
    board: {
      title: "President of Finance",
      email: "jenniferye@umass.edu",
      order: 3,
    },
  },
  {
    name: "Grace Zhou",
    major: "Computer Science + Biology",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/grace.jpeg",
    linkedin: "https://www.linkedin.com/in/gz08/",
    board: {
      title: "President of Internal Affairs",
      email: "gracezhou@umass.edu",
      order: 2,
    },
  },
  {
    name: "Charlie Desmond",
    major: "Computer Science + Math",
    graduationYear: "2028",
    cohort: "founding",
    status: "inactive",
    photo: "/photos/members/founding/charlie.png",
    linkedin: "https://www.linkedin.com/in/charlesdesmond/",
  },
  {
    name: "Samath Gurung",
    major: "Computer Science + Economics",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/samath.jpeg",
    linkedin: "https://www.linkedin.com/in/samathgrg/",
    board: {
      title: "VP of Operations",
      email: "samathgurung@umass.edu",
      order: 5,
    },
  },
  {
    name: "Isha Mukherjee",
    major: "Computer Science + Math",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/isha.jpeg",
    linkedin: "https://www.linkedin.com/in/isha-mukherjee-4aa024313/",
    board: {
      title: "VP of Recruitment",
      email: "imukherjee@umass.edu",
      order: 6,
    },
  },
  {
    name: "Nish Methuku",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/nish.png",
    linkedin: "https://www.linkedin.com/in/nish-methuku/",
  },
  {
    name: "Sara Kong",
    major: "Industrial Engineering + Math",
    graduationYear: "2028",
    cohort: "founding",
    status: "inactive",
    photo: "/photos/members/founding/sara.jpeg",
    linkedin: "https://www.linkedin.com/in/sara-kong0/",
  },
  {
    name: "Yash Sawhney",
    major: "Computer Science + Economics",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/yash.png",
    linkedin: "https://www.linkedin.com/in/yash-saw/",
    board: {
      title: "President of Development",
      email: "ysawhney@umass.edu",
      order: 4,
    },
  },
  {
    name: "Kushaan Naskar",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    status: "inactive",
    photo: "/photos/members/founding/kushaan.jpeg",
    linkedin: "https://www.linkedin.com/in/kushaannaskar/",
  },
  {
    name: "Tiffany Zhang",
    major: "Biomedical Engineering",
    graduationYear: "2029",
    cohort: "founding",
    photo: "/photos/members/founding/tiffany.jpeg",
    linkedin: "https://www.linkedin.com/in/tiffanyzhang227/",
  },
  {
    name: "Ben Hamilton",
    major: "Computer Science",
    graduationYear: "2027",
    cohort: "founding",
    photo: "/photos/members/founding/ben.jpeg",
    linkedin: "https://www.linkedin.com/in/benjamin-hamilton-a6b0a391/",
  },
  {
    name: "Ishani Saha",
    major: "Computer Science + Linguistics",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/ishani.png",
    linkedin: "https://www.linkedin.com/in/ishani-saha-umass/",
  },
  {
    name: "Aarohee Gondkar",
    major: "Computer Science + Psychology",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/aarohee.jpeg",
    linkedin: "https://www.linkedin.com/in/aarohee/",
  },
  {
    name: "Vic Desouza",
    major: "Computer Science + Math",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/vic.jpeg",
    linkedin: "https://www.linkedin.com/in/victoradesouza/",
  },
  {
    name: "Luan Meira",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/luan.jpeg",
    linkedin: "https://www.linkedin.com/in/luanmeira/",
    board: {
      title: "VP of Events",
      email: "lmeira@umass.edu",
      order: 7,
    },
  },
  {
    name: "Adam Post",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/adam.png",
    linkedin: "https://www.linkedin.com/in/adampostmontjoie/",
  },
  {
    name: "Chloe Le",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/chloe.jpeg",
    linkedin: "https://www.linkedin.com/in/chloe-bt-le/",
  },
  {
    name: "Krish Reddy",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/krish.jpeg",
    linkedin: "https://www.linkedin.com/in/krish-reddy-45b445281/",
  },
  {
    name: "Sylvia Shi Sidley",
    major: "Chemistry",
    graduationYear: "2028",
    cohort: "founding",
    photo: "/photos/members/founding/sylvia.jpeg",
    linkedin: "https://www.linkedin.com/in/sylvia-shi-sidley-1bb399363/",
    board: {
      title: "VP of Marketing",
      email: "sshisidley@umass.edu",
      order: 8,
    },
  },
  {
    name: "Sam Carroll",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/sam.jpeg",
    linkedin: "https://www.linkedin.com/in/samantha-carrolll/",
    board: {
      title: "Underclassmen Representative",
      email: "samanthacarr@umass.edu",
      order: 11,
    },
  },
  {
    name: "Anthony Cooper",
    major: "Computer Science",
    graduationYear: "2027",
    cohort: "alpha",
    photo: "/photos/members/alpha/anthonyC.jpeg",
    linkedin: "https://www.linkedin.com/in/anthony-cooper-umass/",
  },
  {
    name: "Rahma Giwa",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/rahma.jpeg",
    linkedin: "https://www.linkedin.com/in/rahmagiwa/",
  },
  {
    name: "Peter Hart",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/peter.jpeg",
    linkedin: "https://www.linkedin.com/in/peter-hart-85b35b325/",
  },
  {
    name: "Ansh Kanyadi",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/ansh.jpeg",
    linkedin: "https://www.linkedin.com/in/ansh-kanyadi-994838284/",
  },
  {
    name: "Shritan Kondaveti",
    major: "Informatics",
    graduationYear: "2028",
    cohort: "alpha",
    photo: "/photos/members/alpha/shritan.jpeg",
    linkedin: "https://www.linkedin.com/in/shritan-kondaveti/",
  },
  {
    name: "Christine Kuan",
    major: "Electrical Engineering",
    graduationYear: "2028",
    cohort: "alpha",
    linkedin: "https://www.linkedin.com/in/christine-kuan-17388b252/",
  },
  {
    name: "Adam Lubomirski",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "alpha",
    photo: "/photos/members/alpha/adam.jpeg",
    linkedin: "https://www.linkedin.com/in/adamlubomirski/",
  },
  {
    name: "Drew Marceau",
    major: "Computer Science + Computational Linguistics",
    graduationYear: "2027",
    cohort: "alpha",
    status: "inactive",
    photo: "/photos/members/alpha/drew.jpeg",
    linkedin: "https://www.linkedin.com/in/andrew-marceau/",
  },
  {
    name: "Yonathan Mesfin",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/yonathan.png",
    linkedin: "https://www.linkedin.com/in/yonathan-mesfin-8799722a6/",
  },
  {
    name: "Vinh Nguyen",
    major: "Math + Physics",
    graduationYear: "2028",
    cohort: "alpha",
    photo: "/photos/members/alpha/vinh.png",
    linkedin: "https://www.linkedin.com/in/vqn/",
  },
  {
    name: "Maryam Syeda",
    major: "Computer Engineering",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/maryam.png",
    linkedin: "https://www.linkedin.com/in/marysyeda/",
  },
  {
    name: "Ari Thomas",
    major: "CS + Stats & DS",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/ari.jpeg",
    linkedin: "https://www.linkedin.com/in/arianamkthomas/",
    board: {
      title: "VP of Finance",
      email: "arimthomas@umass.edu",
      order: 9,
    },
  },
  {
    name: "Shamba Upadhyay",
    major: "CS + Biology",
    graduationYear: "2028",
    cohort: "alpha",
    photo: "/photos/members/alpha/shamba.png",
    linkedin: "https://www.linkedin.com/in/shambhavi-upadhyay-8733b8245/",
  },
  {
    name: "Anthony Yang",
    major: "Computer Science + Math",
    graduationYear: "2028",
    cohort: "alpha",
    photo: "/photos/members/alpha/anthonyY.png",
    linkedin: "https://www.linkedin.com/in/anthony-yang-4045b33a7/",
  },
  {
    name: "Daisy Phung",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/daisy.png",
    linkedin: "https://www.linkedin.com/in/daisy-phung-3b8531342/",
  },
  {
    name: "Chris Bouvier",
    major: "Computer Science",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/chris.jpeg",
    linkedin: "https://www.linkedin.com/in/christopher-bouvier-5924b037b/",
  },
  {
    name: "Gabe Morse",
    major: "OIM",
    graduationYear: "2029",
    cohort: "alpha",
    photo: "/photos/members/alpha/gabe.jpeg",
    linkedin: "https://www.linkedin.com/in/gabrielmorse/",
  },
  {
    name: "Sydney Tor",
    major: "Chemistry",
    graduationYear: "2027",
    cohort: "alpha",
    photo: "/photos/members/alpha/sydney.png",
    linkedin: "https://www.linkedin.com/in/sydney-tor/",
    board: {
      title: "VP of Development",
      email: "stor@umass.edu",
      order: 10,
    },
  },
  {
    name: "Rishabh Devnani",
    major: "Computer Science",
    graduationYear: "2026",
    cohort: "founding",
    status: "inactive",
    photo: "/photos/members/founding/rishabh.jpeg",
    linkedin: "https://www.linkedin.com/in/rishabh-devnani/",
  },
  {
    name: "Glenn Kule",
    major: "Computer Science",
    graduationYear: "2028",
    cohort: "founding",
    status: "inactive",
    photo: "/photos/members/founding/glenn.jpeg",
    linkedin: "https://www.linkedin.com/in/glenn-kule/",
  },
];

export const communityMembers: CommunityMember[] = roster.map((member, index) => ({
  id: `m-${toSlug(member.name)}`,
  name: member.name,
  major: formatMajor(member.major),
  graduationYear: member.graduationYear,
  status: member.status ?? "active",
  cohort: member.cohort,
  photo: member.photo,
  linkedin: member.linkedin,
  initials: getInitials(member.name),
  accent: accents[index % accents.length],
}));

export const boardMembers: BoardMember[] = roster
  .filter((member): member is MemberRecord & { board: BoardRole } => Boolean(member.board))
  .sort((a, b) => a.board.order - b.board.order)
  .map((member, index) => ({
    id: `b-${toSlug(member.name)}`,
    name: member.name,
    role: member.board.title,
    major: formatMajor(member.major),
    graduationYear: member.graduationYear,
    linkedin: member.linkedin,
    email: member.board.email,
    photo: member.photo,
    initials: getInitials(member.name),
    accent: accents[index % accents.length],
  }));
