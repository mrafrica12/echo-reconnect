import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import BookingCta from "@/components/ghl/BookingCta";
import { ArrowRightIcon, CalendarIcon, HaloBadge, ICONS } from "@/components/EchoIcons";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/data/services";
import { faqsForService } from "@/lib/faq-data";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

const AI_RECEPTIONIST_META = SERVICES.find(
  (s) => s.slug === "ai-receptionist"
)!.metaDescription;

export const metadata: Metadata = createPageMetadata({
  title: "AI Receptionist",
  description: AI_RECEPTIONIST_META,
  path: "/services/ai-receptionist",
});

const AI_RECEPTIONIST = SERVICES.find((s) => s.slug === "ai-receptionist")!;
const AI_RECEPTIONIST_FAQS = faqsForService("ai-receptionist");

const jsonLd = [
  serviceJsonLd("ai-receptionist"),
  faqPageJsonLd(AI_RECEPTIONIST_FAQS),
  breadcrumbJsonLd([
    { name: "Services", path: "/services" },
    { name: "AI Receptionist", path: "/services/ai-receptionist" },
  ]),
];

const VOICEMAIL_ITEMS = [
  "Caller waits for a callback",
  "Message sits until someone checks it",
  "No record of what they wanted",
  "Many callers hang up without leaving one",
];

const RECEPTIONIST_ITEMS = [
  "Caller is answered immediately",
  "Their request is captured in the conversation",
  "Appointment can be booked on the spot",
  "Every call becomes a tracked lead record",
];

export default function AiReceptionistPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      {/* Hero */}
      <PageHeader
        eyebrow="AI Reception"
        title="Your phone gets answered."
        accent="Every time."
        description={AI_RECEPTIONIST.fullDescription}
        actions={
          <>
            <BookingCta source="AI Receptionist Hero" className="btn-primary">
              <CalendarIcon width={20} height={20} />
              Book your free consultation
            </BookingCta>
            <Link href="/calculator" className="btn-ghost">
              See what a missed call costs you
              <span className="chip">
                <ArrowRightIcon width={14} height={14} />
              </span>
            </Link>
          </>
        }
      />

      {/* What it does */}
      <section className="bg-surface px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              What it does
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AI_RECEPTIONIST.outcomes.map((outcome, i) => {
              const Icon = ICONS[outcome.icon];
              return (
                <Reveal key={outcome.text} delay={i * 60}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-paper/70 p-6">
                    <HaloBadge size={44}>
                      <Icon width={22} height={22} />
                    </HaloBadge>
                    <span className="leading-relaxed text-ink">
                      {outcome.text}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it differs from voicemail */}
      <section className="px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              How it differs from voicemail
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 border-t border-line pt-12 sm:grid-cols-2">
            <Reveal delay={60}>
              <p className="eyebrow">
                Voicemail
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {VOICEMAIL_ITEMS.map((item) => (
                  <li key={item} className="text-ash">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">
                AI Receptionist
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {RECEPTIONIST_ITEMS.map((item) => (
                  <li key={item} className="text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where it fits */}
      <section className="bg-surface px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              Where it fits
            </p>
            <p className="mt-6 text-lg text-ash">
              Live answering and text-back work together. The receptionist
              takes the call when it comes in. If a call still goes
              unanswered — because you&apos;ve routed it to your own team, or
              because the caller hangs up first — the{" "}
              <Link
                href="/services/missed-call-recovery"
                className="text-ink underline underline-offset-2 hover:text-accent"
              >
                missed call text-back
              </Link>{" "}
              runs as the backstop.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Questions */}
      <section className="px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              AI Receptionist, answered.
            </h2>
            <Link href="/faq" className="btn-ghost mt-8">
              All questions
              <span className="chip">
                <ArrowRightIcon width={14} height={14} />
              </span>
            </Link>
          </Reveal>
          <div>
            {AI_RECEPTIONIST_FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <div className="border-b border-line py-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {faq.q}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ash">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand source="AI Receptionist Final" />
    </>
  );
}
