import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/data/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TEK at UMass Amherst - for recruitment, partnerships, sponsorships, speaking, or general questions.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "General Email",
    value: "tek-rso@umass.edu",
    href: socialLinks.email,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@umasstek",
    href: socialLinks.instagram,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "TEK at UMass Amherst",
    href: socialLinks.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "University of Massachusetts Amherst, Amherst, MA 01003",
    href: "https://maps.google.com/?q=UMass+Amherst",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Whether you're a student, recruiter, or partner - we'd love to hear from you."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedReveal>
              <h2 className="text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
                Reach out directly
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Prefer email or social? Find us here. For partnerships and
                sponsorships, include a bit about your organization and how
                you&apos;d like to engage.
              </p>

              <ul className="mt-10 space-y-6">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex gap-4"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card text-dark-blue shadow-soft transition-all group-hover:shadow-elevated">
                        <item.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-muted">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block font-medium text-dark-neutral group-hover:text-dark-blue transition-colors">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <ContactForm />
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
