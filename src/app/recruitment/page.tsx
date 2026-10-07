import type { Metadata } from "next";
import {
  applicationFormUrl,
  applicationsOpen,
  importantDateGroups,
  recruitmentFaqs,
  recruitmentSteps,
} from "@/lib/data/recruitment";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Timeline } from "@/components/shared/timeline";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { CTABanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "Join TEK at UMass Amherst. Applications are open for Fall '26. Learn about our recruitment process, important dates, and FAQ.",
  alternates: { canonical: "/recruitment" },
};

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Fall '26 · Beta Class"
        title="Join a community that invests in you"
        description="Applications are open through Oct 13. We look for curiosity, kindness, and a desire to build with others - not a perfect resume."
      />

      <section
        id="apply"
        className="scroll-mt-28 bg-background-warm py-10 sm:py-12"
      >
        <div className="container-page">
          <AnimatedReveal className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-medium-blue uppercase">
              Now open
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-dark-neutral sm:text-3xl">
              {applicationsOpen.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-maroon">
              Due {applicationsOpen.deadline}
            </p>
            <p className="mt-3 max-w-xl text-muted leading-relaxed">
              {applicationsOpen.description}
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <a
                  href={applicationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply now
                </a>
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Mark your calendar"
            title="Important dates"
            description="Open events are for everyone. Closed events are invite-only. Offers are released sometime during the week of Oct 18-24 - same time for everyone."
          />
          <div className="mt-12 max-w-2xl space-y-12">
            {importantDateGroups.map((group, groupIndex) => (
              <AnimatedReveal key={group.title} delay={groupIndex * 0.06}>
                <h3 className="text-sm font-medium tracking-wide text-medium-blue uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <li
                      key={`${group.title}-${item.date}-${item.title}`}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8"
                    >
                      <p className="shrink-0 text-sm font-semibold text-maroon sm:w-28">
                        {item.date}
                      </p>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <p className="text-lg font-semibold tracking-tight text-dark-neutral">
                            {item.title}
                          </p>
                          {"tag" in item ? (
                            <span className="text-xs font-medium tracking-wide text-muted uppercase">
                              {item.tag}
                            </span>
                          ) : null}
                        </div>
                        {"detail" in item ? (
                          <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-warm py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="The process"
              title="How recruitment works"
              description="Application, open events, closed events, then offers - designed to help us get to know each other, not to stress you out."
            />
            <Button asChild size="lg" className="shrink-0 self-start">
              <a
                href={applicationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply now
              </a>
            </Button>
          </div>
          <div className="mt-12 max-w-2xl">
            <Timeline items={recruitmentSteps} variant="process" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeader
            eyebrow="Questions"
            title="FAQ"
            description="Everything you might want to know before applying."
            className="mb-10"
          />
          <FAQAccordion items={recruitmentFaqs} />
        </div>
      </section>

      <CTABanner
        title="Ready when you are"
        description="Applications are open through Oct 13. We'd love to hear from you."
        primaryLabel="Apply now"
        primaryHref={applicationFormUrl}
        secondaryLabel="Explore community"
        secondaryHref="/community"
      />
    </>
  );
}
