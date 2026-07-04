export interface CommunityStat {
  label: string;
  value: number;
  suffix?: string;
}

/** Update these values in one place  -  used across the homepage and sponsors page. */
export const communityStats: CommunityStat[] = [
  { label: "Members", value: 180, suffix: "+" },
  { label: "Events Hosted", value: 45, suffix: "+" },
  { label: "Coffee Chats", value: 120, suffix: "+" },
  { label: "Guest Speakers", value: 18, suffix: "+" },
  { label: "Internships Secured", value: 50, suffix: "+" },
  { label: "Alumni", value: 60, suffix: "+" },
];
