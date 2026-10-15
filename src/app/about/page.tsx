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
    "Echo Reconnects is a social media marketing business based in Atlanta, GA, with AI reception and automation available as additional products.",
  path: "/about",
});

const breadcrumb = breadcrumbJsonLd([{ name: "About", path: "/about" }]);

const REASONS = [
  { title: "A clear business message", detail: "Help customers understand what you do and how to take the next step.", icon: "humanLikeConversations" as const },
  { title: "A consistent social presence", detail: "Bring your business identity into the conversation about your social presence.", icon: "marketingAutomation" as const },
  { title: "An agreed scope", detail: "Define the platforms, content needs, and level of support together.", icon: "workflowAutomation" as const },
  { title: "Optional additional support", detail: "Explore AI reception and automation as separate products when you need them.", icon: "aiReceptionist" as const },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHeader
        eyebrow="About"
        title="We help your business"
        accent="stay connected."
        description="Echo Reconnects leads with social media marketing, helping businesses build a consistent social presence. AI reception and supporting automation are additional, separately scoped products."
      />

      <section className="px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              What guides our work
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
              We start by understanding your business, your audience, and your
              goals. Then we agree the marketing support and workflow that fit
              your needs, with clear responsibilities before work starts.
            </p>
            <p className="mt-6 max-w-lg text-lg text-ash">
              We&apos;re based in Atlanta, GA. Social media marketing is
              available on its own. If you also need help handling incoming
              calls or follow-up, we can discuss AI reception and automation
              separately.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand source="About" />
    </>
  );
}
