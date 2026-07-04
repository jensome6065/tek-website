import Link from "next/link";
import { memberStories } from "@/lib/data/members";
import { MemberStoriesSection } from "@/components/members/member-stories-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export function MemberStories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Our people"
            title="Member Stories"
            description="Real voices from the community - why they joined, what they built, and how they found their people."
          />
          <Button asChild variant="secondary" className="shrink-0 self-start">
            <Link href="/members">Meet everyone</Link>
          </Button>
        </div>

        <div className="mt-12">
          <MemberStoriesSection stories={memberStories} />
        </div>
      </div>
    </section>
  );
}
