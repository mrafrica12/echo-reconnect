import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BookingCta from "@/components/ghl/BookingCta";
import { IconBadge, ICONS } from "@/components/EchoIcons";
import { SERVICES } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Receptionist",
  description:
    "An AI receptionist that answers your calls in your business name, handles common questions, and books appointments — during hours and after close.",
  path: "/services/ai-receptionist",
});

const AI_RECEPTIONIST = SERVICES.find((s) => s.slug === "ai-receptionist")!;

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
      {/* Hero */}
      <section className="px-6 pb-8 pt-28 lg:pt-36">
        <Reveal>
          <div className="container-copy text-center">
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              AI Reception
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              Your phone gets answered. Every time.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg text-ash">
              {AI_RECEPTIONIST.fullDescription}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookingCta
                source="AI Receptionist Hero"
                className="inline-block rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
              >
                Book your free consultation
              </BookingCta>
              <Link
                href="/calculator"
                className="inline-block border-b border-ink px-1 py-1 text-base text-ink transition-colors hover:border-accent hover:text-accent"
              >
                See what a missed call costs you
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What it does */}
      <section className="bg-surface px-6 py-24 lg:py-32">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              What it does
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {AI_RECEPTIONIST.outcomes.map((outcome, i) => {
              const Icon = ICONS[outcome.icon];
              return (
                <Reveal key={outcome.text} delay={i * 60}>
                  <IconBadge pillar="reception" size="md">
                    <Icon />
                  </IconBadge>
                  <p className="mt-4 text-lg text-ink">{outcome.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it differs from voicemail */}
      <section className="px-6 py-24 lg:py-32">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              How it differs from voicemail
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 border-t border-line pt-12 sm:grid-cols-2">
            <Reveal delay={60}>
              <p className="text-sm uppercase tracking-[0.14em] text-ash">
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
              <p className="text-sm uppercase tracking-[0.14em] text-ash">
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
      <section className="bg-surface px-6 py-24 lg:py-32">
        <div className="container-copy text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Where it fits
            </p>
            <p className="mt-6 text-lg text-ash">
              Live answering and text-back work together. The receptionist
              takes the call when it comes in. If a call still goes
              unanswered — because you&apos;ve routed it to your own team, or
              because the caller hangs up first — the{" "}
              <Link
                href="/services#missed-call-recovery"
                className="text-ink underline underline-offset-2 hover:text-accent"
              >
                missed call text-back
              </Link>{" "}
              runs as the backstop.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink px-6 py-32 text-center text-paper lg:py-40">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold lg:text-5xl">
            Stop losing opportunities when you miss a call.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/70">
            See what missed calls may be costing your business and discover
            how Echo Reconnects can help you respond faster, book more
            appointments, and track every opportunity.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookingCta
              source="AI Receptionist Final"
              className="inline-block rounded-full bg-accent px-7 py-3.5 text-base text-paper transition-colors hover:bg-white hover:text-ink"
            >
              Book your free consultation
            </BookingCta>
            <Link
              href="/calculator"
              className="inline-block border-b border-white/60 px-1 py-1 text-base text-paper transition-colors hover:border-accent hover:text-accent"
            >
              Calculate lost revenue
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            No technical setup required from your team.
          </p>
        </Reveal>
      </section>
    </>
  );
}
