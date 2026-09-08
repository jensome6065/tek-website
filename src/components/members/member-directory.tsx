import type { CommunityMember } from "@/lib/data/members";
import { groupCommunityMembers } from "@/lib/data/members";
import { CommunityMemberCard } from "@/components/members/community-member-card";
import { EmptyState } from "@/components/shared/empty-state";
import { cn } from "@/lib/utils";

interface MemberDirectoryProps {
  members: CommunityMember[];
}

interface MemberGroupProps {
  title: string;
  description: string;
  members: CommunityMember[];
  className?: string;
}

function MemberGroup({
  title,
  description,
  members,
  className,
}: MemberGroupProps) {
  if (members.length === 0) return null;

  return (
    <div className={cn("space-y-8", className)}>
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted">{description}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member, index) => (
          <CommunityMemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

export function MemberDirectory({ members }: MemberDirectoryProps) {
  const { active, inactive } = groupCommunityMembers(members);

  if (active.length === 0 && inactive.length === 0) {
    return (
      <EmptyState
        mood="bob"
        title="Herd assembling"
        description="Member profiles will show up here as the community grows. Check back soon — or join us."
        actionLabel="Join TEK"
        actionHref="/recruitment"
      />
    );
  }

  return (
    <div className="space-y-16">
      <MemberGroup
        title="Active members"
        description="Current TEK members who show up for events, projects, and the community."
        members={active}
      />
      <MemberGroup
        title="Inactive members"
        description="Alumni and former members who helped build TEK along the way."
        members={inactive}
        className="border-t border-border pt-16"
      />
    </div>
  );
}
