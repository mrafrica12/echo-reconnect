import Link from "next/link";
import Reveal from "@/components/Reveal";
import CalculatorTeaser from "@/components/home/CalculatorTeaser";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FaqAccordion from "@/components/home/FaqAccordion";

const QUIET_FEATURES = [
  {
    name: "Intelligent Lead Capture",
    detail: "Every call, text, and form fills in the same record.",
  },
  {
    name: "Custom Workflow Automation",
    detail: "Invoicing and follow-ups happen without you.",
  },
  {
    name: "Performance Analytics",
    detail: "See what you're recovering, in real numbers.",
  },
  {
    name: "Omnichannel Communication",
    detail: "Voice, text, and email, in one place.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Connect your number",
    detail: "We link your existing phone system in minutes.",
  },
  {
    n: "02",
    title: "Auto-reply goes live",
    detail: "A missed call instantly gets a text back.",
  },
  {
    n: "03",
    title: "Customers book themselves",
    detail: "They pick a time and lock in the appointment.",
  },
  {
    n: "04",
    title: "You stop losing money",
    detail: "Every missed call becomes a paying customer.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-24 pt-28 lg:pt-40">
        <div className="container-copy text-center">
          <Reveal>
            <h1 className="font-display text-6xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Never miss another call.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-8 max-w-md text-lg text-ash">
              Echo Reconnect answers, texts back, and books the appointment —
              before your customer calls anyone else.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/calculator"
              className="mt-10 inline-block rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
            >
              See what a missed call costs you
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Calculator teaser */}
      <section className="bg-surface py-24 lg:py-32">
        <Reveal>
          <CalculatorTeaser />
        </Reveal>
      </section>

      {/* What We Build */}
      <section className="px-6 py-28 lg:py-36">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              What we build
            </p>
          </Reveal>

          <div className="mt-6 grid gap-16 lg:mt-10 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
                Missed Call Recovery
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ash">
                Every missed call gets an instant text back — before the
                customer tries your competitor.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
                Automated Appointment Booking
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ash">
                Customers pick a time and book themselves. No calendar tag, no
                back-and-forth.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <dl className="mt-24 grid gap-x-12 gap-y-10 border-t border-line pt-12 sm:grid-cols-2">
              {QUIET_FEATURES.map((f) => (
                <div key={f.name}>
                  <dt className="text-ink">{f.name}</dt>
                  <dd className="mt-1 text-ash">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Simple Setup */}
      <section className="bg-surface px-6 py-28 lg:py-36">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Simple setup
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              Live in days, not months.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <span className="font-display text-2xl text-accent">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-ash">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-ink py-28 text-paper lg:py-36">
        <Reveal>
          <div className="[&_p]:text-paper [&_.text-ash]:text-white/60 [&_.bg-line]:bg-white/20">
            <TestimonialCarousel />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 lg:py-36">
        <div className="container-copy">
          <Reveal>
            <h2 className="text-center font-display text-4xl font-semibold text-ink lg:text-5xl">
              Questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-16">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink px-6 py-32 text-center text-paper lg:py-40">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold lg:text-5xl">
            Stop losing calls.
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
