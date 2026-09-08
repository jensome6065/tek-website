export interface MomentVideo {
  id: string;
  src: string;
  label: string;
  /** Optional Instagram post/reel URL */
  href?: string;
}

export const momentVideos: MomentVideo[] = [
  {
    id: "retreat",
    src: "/videos/instagram/retreat-killington.mp4",
    label: "Retreat in Killington, Vermont",
    href: "https://www.instagram.com/p/DcRGc4cqCui/",
  },
  {
    id: "bid-night",
    src: "/videos/instagram/s26-bid-night.mp4",
    label: "S26 Bid Night",
    href: "https://www.instagram.com/p/DXpWVbLCfou/",
  },
  {
    id: "big-little",
    src: "/videos/instagram/s26-big-little-reveal.mp4",
    label: "S26 Big-Little Reveal",
    href: "https://www.instagram.com/p/DYKr0oBpzJz/",
  },
  {
    id: "recruitment-close",
    src: "/videos/instagram/s26-recruitment-wrap.mp4",
    label: "S26 Recruitment Wrap",
    href: "https://www.instagram.com/p/DXbyqN4iKaA/",
  },
  {
    id: "casino",
    src: "/videos/instagram/s26-casino-night.mp4",
    label: "S26 Casino Night",
    href: "https://www.instagram.com/p/DXPbv7QiVMI/",
  },
  {
    id: "jeopardy",
    src: "/videos/instagram/s26-jeopardy-night.mp4",
    label: "S26 Jeopardy Night",
    href: "https://www.instagram.com/p/DWmFhObDXz3/",
  },
  {
    id: "open-recruitment",
    src: "/videos/instagram/s26-open-recruitment.mp4",
    label: "S26 Open Recruitment",
    href: "https://www.instagram.com/p/DWWzA4iCWP3/",
  },
];
