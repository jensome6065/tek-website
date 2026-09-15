import type { Metadata } from "next";
import { boardMembers, communityMembers } from "@/lib/data/members";
import { BoardCard } from "@/components/shared/board-card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { CTABanner } from "@/components/shared/cta-banner";
import { MemberDirectory } from "@/components/members/member-directory";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the TEK community - executive board and the people who make TEK feel like home.",
  alternates: { canonical: "/members" },
};

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="Meet TEK"
        description="The heart of TEK isn't a program - it's the people who show up for each other."
      />

      <section
        id="board"
        className="scroll-mt-28 bg-background-warm py-16 sm:py-20"
      >
        <div className="container-page">
          <SectionHeader
            eyebrow="Leadership"
            title="Executive board"
            description="The students who keep TEK running - planning events, supporting members, and protecting the culture that makes this community special."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boardMembers.map((member, index) => (
              <BoardCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="directory" className="scroll-mt-28 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Directory"
            title="Our members"
            description="Engineers, designers, builders, and innovators across majors and years - united by community."
            className="mb-12"
          />
          <MemberDirectory members={communityMembers} />
        </div>
      </section>

      <CTABanner
        title="Want to be part of this?"
        description="Join TEK and find people who will build with you, grow with you, and show up for you."
        primaryLabel="Join TEK"
        primaryHref="/recruitment"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}
