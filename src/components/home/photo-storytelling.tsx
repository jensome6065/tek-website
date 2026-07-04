import { PhotoGrid } from "@/components/shared/photo-grid";
import { SectionHeader } from "@/components/shared/section-header";

const stories = [
  {
    title: "Late nights, shared screens",
    description:
      "Project build nights are where ideas become prototypes - and teammates become friends. Someone always brings snacks. Someone always has the answer you needed.",
    label: "Project Nights",
    gradient: "from-dark-blue to-medium-blue",
  },
  {
    title: "Conversations over coffee",
    description:
      "No agenda. No elevator pitch. Just members across years and majors getting to know each other - the kind of conversations that make campus feel smaller.",
    label: "Coffee Chats",
    gradient: "from-medium-blue to-light-blue",
    reverse: true,
  },
  {
    title: "Weekends that become traditions",
    description:
      "Retreats pull us away from campus and closer to each other. Hikes, games, late-night talks - and the reminder that this community is real.",
    label: "Retreats",
    gradient: "from-dark-neutral to-dark-blue",
  },
  {
    title: "Building under pressure, together",
    description:
      "Hackathons are intense. They're also some of our favorite memories - teams forming at TEK, shipping something wild, and celebrating every demo.",
    label: "Hackathons",
    gradient: "from-maroon/80 to-dark-blue",
    reverse: true,
  },
];

export function PhotoStorytelling() {
  return (
    <section className="bg-background-warm py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Life at TEK"
          title="Moments that matter"
          description="Not a gallery - a story. These are the experiences that turn classmates into a community."
          className="mb-14"
        />
        <PhotoGrid stories={stories} />
      </div>
    </section>
  );
}
