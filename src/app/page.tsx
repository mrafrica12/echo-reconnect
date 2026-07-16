import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CalculatorTeaser from "@/components/home/CalculatorTeaser";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FaqAccordion from "@/components/home/FaqAccordion";
import BookingCta from "@/components/ghl/BookingCta";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";

const CAPABILITIES = [
  { label: "Instant Response", detail: "Replies within seconds, day or night." },
  { label: "24/7 Automation", detail: "Always on, even after you close." },
  { label: "Real-Time Tracking", detail: "See every lead and booking as it happens." },
];

const CONSEQUENCES = [
  "Lost appointments",
  "Slow follow-up",
  "Untracked leads",
];

const RESPONSES = [
  "Instant text-back",
  "Lead capture",
  "Self-service booking",
];

const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
const QUIET_SERVICES = SERVICES.filter((s) => !s.featured);

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
    title: "You recover more opportunities",
    detail: "Your team gets organized lead info while more inquiries move toward booked appointments.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-20 pt-28 lg:pt-40">
        <div className="container-copy text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Helping businesses capture every opportunity
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Never miss another call.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-8 max-w-md text-lg text-ash">
              Echo Reconnect answers, texts back, and books the appointment —
              before your customer calls anyone else.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookingCta
                source="Hero"
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
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="container-wide mt-20 lg:mt-28">
            <div className="edge-fade relative aspect-[16/9] w-full">
              <Image
                src="/images/hero.webp"
                alt=""
                fill
                priority
                sizes="(min-width: 1320px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Capability strip */}
      <section className="border-y border-line px-6 py-8">
        <Reveal>
          <div className="container-content flex flex-col items-center gap-6 divide-y divide-line text-center sm:flex-row sm:justify-center sm:divide-x sm:divide-y-0">
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="px-6 pt-6 sm:pt-0">
                <p className="text-sm uppercase tracking-[0.14em] text-ash">
                  {c.label}
                </p>
                <p className="mt-1 text-ink">{c.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Calculator teaser */}
      <section className="bg-surface py-24 lg:py-32">
        <Reveal>
          <CalculatorTeaser />
        </Reveal>
      </section>

      {/* Problem / urgency */}
      <section className="px-6 py-28 lg:py-36">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Why it matters
            </p>
            <h2 className="mt-6 max-w-lg font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              A missed call can become a lost customer.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ash">
              When customers can&apos;t reach you, many call the next business
              immediately. Echo Reconnect responds within seconds, captures
              what they need, and gives them a direct path to book.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2">
            <Reveal delay={60}>
              <p className="text-sm uppercase tracking-[0.14em] text-ash">
                Without a response system
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {CONSEQUENCES.map((item) => (
                  <li key={item} className="text-ash">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm uppercase tracking-[0.14em] text-ash">
                With Echo Reconnect
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {RESPONSES.map((item) => (
                  <li key={item} className="text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-surface px-6 py-28 lg:py-36">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              What we build
            </p>
          </Reveal>

          <div className="mt-6 grid gap-16 lg:mt-10 lg:grid-cols-2 lg:gap-12">
            {FEATURED_SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <h2 className="font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-sm text-lg text-ash">
                  {service.shortDescription}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <dl className="mt-24 grid gap-x-12 gap-y-10 border-t border-line pt-12 sm:grid-cols-2">
              {QUIET_SERVICES.map((s) => (
                <div key={s.slug}>
                  <dt className="text-ink">{s.title}</dt>
                  <dd className="mt-1 text-ash">{s.shortDescription}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-block border-b border-ink text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Simple Setup */}
      <section className="px-6 py-28 lg:py-36">
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

      {/* Testimonials — renders nothing until a real, approved quote exists */}
      {TESTIMONIALS.length > 0 && (
        <section className="bg-ink py-28 text-paper lg:py-36">
          <Reveal>
            <div className="[&_p]:text-paper [&_.text-ash]:text-white/60 [&_.bg-line]:bg-white/20">
              <TestimonialCarousel />
            </div>
          </Reveal>
        </section>
      )}

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
            Stop losing opportunities when you miss a call.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/70">
            See what missed calls may be costing your business and discover
            how Echo Reconnect can help you respond faster, book more
            appointments, and track every opportunity.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookingCta
              source="Homepage Final CTA"
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
