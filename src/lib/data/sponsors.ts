/**
 * Sponsorship content from the TEK Sponsorship Packet.
 * Update this file when tiers, benefits, or contact details change.
 */

export const sponsorIntro = {
  title: "Partner with TEK",
  description:
    "TEK is the first professional and social technology community at UMass Amherst - empowering engineers, product managers, designers, and innovators through collaboration and career development. We're seeking strategic partners who share our commitment to innovation, diversity, and the future of technology.",
};

export const sponsorshipEnables = [
  "Host technical workshops, hackathons, and speaker events",
  "Build recruitment and career development pipelines",
  "Support underserved students through financial accessibility initiatives",
  "Create flagship campus events that connect industry with top talent",
];

export const tekHighlights = [
  {
    title: "First professional speaker",
    description:
      "Hosted the CTO of Instacart for an exclusive leadership and technology discussion.",
  },
  {
    title: "National ties",
    description:
      "Hosted a panel with founders and leadership of the University of Michigan TEK Chapter.",
  },
  {
    title: "Pipeline growth",
    description:
      "Alpha Class rush attracted 250+ candidates, establishing TEK as one of the largest tech communities at UMass.",
  },
  {
    title: "What's ahead",
    description:
      "Hackathons, startup nights, and recruiting panels with leading technology firms.",
  },
];

export const whyPartner = [
  {
    title: "Access top talent",
    description:
      "Engage early with highly motivated technical students across majors - computer science, engineering, product design, entrepreneurship, and data science.",
  },
  {
    title: "Brand visibility",
    description:
      "Increase your company's campus presence through events, social media, and merchandise.",
  },
  {
    title: "Diversity and inclusion",
    description:
      "Support an organization built on equity, accessibility, and community impact.",
  },
  {
    title: "Innovation pipeline",
    description:
      "Gain early access to student-led projects, hackathon teams, and startup ventures.",
  },
];

export interface SponsorTier {
  name: string;
  price: string;
  description: string;
  perks: string[];
  highlighted?: boolean;
  accent?: "founders" | "platinum" | "gold" | "silver" | "bronze";
}

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Founders Circle",
    price: "$5,000+",
    description:
      "Shape the future of technology leadership at UMass Amherst and across New England.",
    accent: "founders",
    highlighted: true,
    perks: [
      "Exclusive naming rights for TEK's annual flagship event",
      "Private networking dinner with executive members and alumni",
      "Largest brand placement across events, merch, and marketing",
      "Customized recruiting pipeline collaboration",
      "Personalized impact report",
      "Permanent recognition as a founding force behind TEK",
    ],
  },
  {
    name: "Platinum Partner",
    price: "$2,500+",
    description: "High-visibility partnership with priority recruiting access.",
    accent: "platinum",
    perks: [
      "Named sponsorship of a flagship event",
      "Company spotlight at all meetings",
      "Priority recruitment access",
      "Branded merch placement",
      "Guaranteed speaking engagement",
    ],
  },
  {
    name: "Gold Partner",
    price: "$1,000+",
    description: "Strong presence across recruitment and professional events.",
    accent: "gold",
    perks: [
      "Logo on website and merchandise",
      "Speaking opportunity",
      "Featured at recruitment and professional events",
      "Resume book access",
    ],
  },
  {
    name: "Silver Partner",
    price: "$500+",
    description: "Stay connected with our community throughout the year.",
    accent: "silver",
    perks: [
      "Logo on website and newsletters",
      "Invitation to networking events",
      "Access to member resume directory",
    ],
  },
  {
    name: "Bronze Partner",
    price: "$100+",
    description: "Show support and be recognized as part of TEK's growth.",
    accent: "bronze",
    perks: [
      "Recognition in all marketing materials",
      "Social media spotlight",
      "Invitation to mixer events",
    ],
  },
];

export const foundersCircleBenefits = [
  {
    title: "Legacy impact",
    description:
      "Recognized as a founding force behind TEK's establishment and growth - permanently honored on our website, chapter history, and flagship events.",
  },
  {
    title: "Direct access to top talent",
    description:
      "Priority access to high-performing students across CS, engineering, data science, and business, with customized recruiting touchpoints.",
  },
  {
    title: "Strategic brand positioning",
    description:
      "Featured at the highest visibility level across events, merchandise, websites, and marketing campaigns.",
  },
  {
    title: "Innovation collaboration",
    description:
      "Co-design hackathon challenges, sponsor case competitions, and collaborate on technical initiatives aligned with your company's goals.",
  },
  {
    title: "Private executive networking",
    description:
      "Invitation to an exclusive annual dinner with the TEK executive team, alumni, and advisory mentors.",
  },
];

export const sponsorshipImpact = [
  {
    title: "Technical excellence",
    description:
      "Expansion of hackathons, coding workshops, product design labs, and build nights that cultivate real-world skills.",
  },
  {
    title: "Professional development",
    description:
      "Honorariums and travel for industry speakers, alumni panels, and recruiting events that connect companies with high-potential students.",
  },
  {
    title: "Equity & accessibility",
    description:
      "Financial aid to ensure socioeconomic barriers do not limit participation in tech leadership opportunities.",
  },
  {
    title: "Innovation & entrepreneurship",
    description:
      "Seed funding for member-led startups, pitch competitions, and project showcases.",
  },
  {
    title: "Community impact",
    description:
      "Outreach programs that inspire the next generation of technologists through K-12 programming and nonprofit tech initiatives.",
  },
];

export const strategicAlignment = [
  {
    pillar: "Diversity, Equity & Inclusion",
    benefit:
      "Build relationships with students committed to leadership, accountability, and long-term partnership.",
  },
  {
    pillar: "Excellence",
    benefit:
      "Access a talent pipeline that is interdisciplinary, demographically diverse, and committed to inclusive innovation.",
  },
  {
    pillar: "Integrity",
    benefit:
      "Engage with students who have demonstrated academic achievement, leadership, and technical excellence.",
  },
];

export const strategicVision = [
  {
    period: "Year 1-2",
    description:
      "Establish TEK as UMass Amherst's premier technology community and secure long-term founding sponsors.",
  },
  {
    period: "Year 2-3",
    description:
      "Launch the first regional TEK Hackathon attracting companies, students, and alumni across the Northeast.",
  },
  {
    period: "Year 3-5",
    description:
      "Build an active alumni network and corporate advisory board to create internship pipelines and industry partnerships.",
  },
  {
    period: "By 2030",
    description:
      "Position TEK as the national model for professional technology communities - producing future founders, CTOs, and innovators.",
  },
];

export const sponsorContact = {
  email: "jenniferye@umass.edu",
  instagram: "@umasstek",
  instagramUrl: "https://instagram.com/umasstek",
  financePresident: "Jennifer Ye",
  financeVicePresident: "Ariana Thomas",
};
