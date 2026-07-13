import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Echo Reconnect helps service businesses in Atlanta, GA stop losing customers to missed calls with automation systems live in 48 to 72 hours.",
};

const REASONS = [
  {
    title: "Stop losing customers",
    detail: "Missed calls turn into booked appointments automatically.",
  },
  {
    title: "Live in 48 to 72 hours",
    detail: "No long setup. No complicated systems.",
  },
  {
    title: "Works with your number",
    detail: "No new number. No disruption to your business.",
  },
  {
    title: "Built for revenue",
    detail: "Designed to increase bookings, not just automate tasks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-28 lg:pt-36">
        <Reveal>
          <div className="container-copy text-center">
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              About
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              We help businesses capture every opportunity.
            </h1>
            <p className="mx-auto mt-8 max-w-md text-lg text-ash">
              Echo Reconnect builds custom automation systems that recover
              missed calls, book appointments, and streamline operations for
              service businesses.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Why businesses choose us
            </p>
          </Reveal>
          <dl className="mt-10 grid gap-x-12 gap-y-12 border-t border-line pt-12 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80}>
                <dt className="font-display text-2xl text-ink">
                  {reason.title}
                </dt>
                <dd className="mt-2 text-ash">{reason.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ink px-6 py-32 text-center text-paper lg:py-40">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold lg:text-5xl">
            Ready to stop losing opportunities?
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-accent px-7 py-3.5 text-base text-paper transition-colors hover:bg-white hover:text-ink"
          >
            Book your free consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
