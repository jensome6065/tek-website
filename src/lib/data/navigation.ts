export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/members", label: "Members" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  community: [
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/members", label: "Members" },
  ],
  getInvolved: [
    { href: "/recruitment", label: "Recruitment" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const socialLinks = {
  instagram: "https://instagram.com/umasstek",
  linkedin: "https://linkedin.com/company/umasstek",
  email: "mailto:tek@umass.edu",
} as const;
