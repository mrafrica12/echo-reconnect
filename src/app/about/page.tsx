import type { Metadata } from "next";
import { HaloBadge, ICONS } from "@/components/EchoIcons";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why We Built Echo Reconnects",
  description:
    "Echo Reconnects helps service businesses in Atlanta, GA stop losing customers to missed calls with practical, measurable automation systems.",
  path: "/about",
});

const breadcrumb = breadcrumbJsonLd([{ name: "About", path: "/about" }]);

const REASONS = [
  {
    title: "Stop losing customers",
    detail: "Missed calls turn into booked appointments automatically.",
    icon: "missedCallRecovery" as const,
  },
  {
    title: "Live in days, not months",
    detail: "No long setup. No complicated systems.",
    icon: "aiReceptionist" as const,
  },
  {
    title: "Works with your number",
    detail: "No new number. No disruption to your business.",
    icon: "humanLikeConversations" as const,
  },
  {
    title: "Built for revenue",
    detail: "Designed to increase bookings, not just automate tasks.",
    icon: "reporting" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHeader
        eyebrow="About"
        title="We help businesses capture"
        accent="every opportunity."
        description="Echo Reconnects builds custom automation systems that recover missed calls, book appointments, and streamline operations for service businesses."
      />

      <section className="px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              Why businesses choose us
            </p>
          </Reveal>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {REASONS.map((reason, i) => {
              const ReasonIcon = ICONS[reason.icon];
              return (
                <Reveal key={reason.title} delay={i * 80}>
                  <div className="flex h-full items-start gap-5 rounded-2xl border border-line bg-surface p-7">
                    <HaloBadge size={48}>
                      <ReasonIcon width={24} height={24} />
                    </HaloBadge>
                    <div>
                      <dt className="font-display text-xl font-semibold text-ink">
                        {reason.title}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-ash">
                        {reason.detail}
                      </dd>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="bg-surface px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              Our approach
            </p>
            <p className="mt-6 max-w-lg text-lg text-ink">
              Echo Reconnects builds practical communication and workflow
              systems designed to help businesses respond faster, stay
              organized, and recover opportunities that would otherwise be
              lost.
            </p>
            <p className="mt-6 max-w-lg text-lg text-ash">
              We&apos;re based in Atlanta, GA, and we build for measurable
              business improvement — more booked appointments, faster
              response times, fewer untracked leads — not automation for its
              own sake or for appearances.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand source="About" title="Ready to stop losing opportunities?" />
    </>
  );
}
