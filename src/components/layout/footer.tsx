import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerLinks, socialLinks } from "@/lib/data/navigation";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-warm">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logos/tek-circle.png"
                alt="TEK at UMass Amherst"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full"
              />
              <div>
                <p className="font-semibold tracking-tight text-dark-neutral">
                  TEK
                </p>
                <p className="text-sm text-muted">at UMass Amherst</p>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Let&apos;s redefine tech culture.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-dark-blue shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-dark-blue shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.email}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-dark-blue shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-dark-neutral uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-dark-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-dark-neutral uppercase">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-dark-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-dark-neutral uppercase">
              Visit
            </h3>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-medium-blue" />
              University of Massachusetts Amherst
              <br />
              Amherst, MA 01003
            </p>
            <a
              href={socialLinks.email}
              className="mt-4 inline-block text-sm font-medium text-maroon hover:underline"
            >
              tek@umass.edu
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TEK at UMass Amherst. All rights
            reserved.
          </p>
          <p>Technology. Empowerment. Kinship.</p>
        </div>
      </div>
    </footer>
  );
}
