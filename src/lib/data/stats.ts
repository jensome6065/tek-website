export interface CommunityStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  detail?: string;
}

/**
 * Canonical TEK metrics — edit values here only.
 * Homepage and sponsors page select which stats to display.
 */
const stats = {
  foundingMembers: {
    id: "founding-members",
    label: "Founding Members",
    value: 25,
    detail: "Selected from 60+ students",
  },
  activeMembers: {
    id: "active-members",
    label: "Active Members",
    value: 36,
    detail: "After Alpha class recruitment",
  },
  eventsHosted: {
    id: "events-hosted",
    label: "Events Hosted",
    value: 50,
    suffix: "+",
  },
  interestedMembers: {
    id: "interested-members",
    label: "Interested Members",
    value: 300,
    suffix: "+",
  },
  guestSpeakers: {
    id: "guest-speakers",
    label: "Guest Speakers",
    value: 5,
  },
  instagramFollowers: {
    id: "instagram-followers",
    label: "Instagram Followers",
    value: 500,
    suffix: "+",
    detail: "Posts reaching 200,000+ views",
  },
  rushCandidates: {
    id: "rush-candidates",
    label: "Rush Candidates",
    value: 250,
    suffix: "+",
    detail: "Alpha Class interest",
  },
} as const satisfies Record<string, CommunityStat>;

/** Homepage “By the numbers” strip. */
export const communityStats: CommunityStat[] = [
  stats.activeMembers,
  stats.eventsHosted,
  stats.interestedMembers,
  stats.guestSpeakers,
];

/** Sponsors page “TEK so far” grid. */
export const sponsorStats: CommunityStat[] = [
  stats.foundingMembers,
  stats.activeMembers,
  stats.instagramFollowers,
  stats.rushCandidates,
];
