export interface CommunityStat {
  label: string;
  value: number;
  suffix?: string;
}

/** Update these values in one place  -  used across the homepage and sponsors page. */
export const communityStats: CommunityStat[] = [
  { label: "Active Members", value: 36},
  { label: "Events Hosted", value: 50, suffix: "+" },
  { label: "Interested Members", value: 300, suffix: "+" },
  // { label: "Coffee Chats", value: 120, suffix: "+" },
  { label: "Guest Speakers", value: 5},
  // { label: "Internships Secured", value: 50, suffix: "+" },
  // { label: "Collaborations", value: 3},
];
