import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CalculatorTeaser from "@/components/home/CalculatorTeaser";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FaqAccordion from "@/components/home/FaqAccordion";
import BookingCta from "@/components/ghl/BookingCta";
import { IconBadge, ICONS } from "@/components/EchoIcons";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";
import { createPageMetadata, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Never miss another call",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  title: { absolute: "Echo Reconnects — Never miss another call." },
};

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

// Omnichannel Communication is folded into Lead Capture on the homepage
// only, to keep this grid at six cards — it stays a separate section on
// the full /services page.
const HOMEPAGE_SERVICES = SERVICES.filter(
  (s) => s.slug !== "omnichannel-communication"
);

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
      <section className="px-6 pb-12 pt-2 lg:h-[600px] lg:min-h-[600px] lg:max-h-[640px] lg:py-16">
        <div className="container-wide grid items-center gap-12 lg:h-full lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:grid-rows-[1fr_auto]">
          <div className="text-center lg:self-end lg:text-left">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Helping businesses capture every opportunity
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-2 font-display text-6xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-7xl lg:mt-5 lg:text-8xl">
              Never miss another call.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-8 max-w-md text-lg text-ash lg:mx-0">
              Echo Reconnects answers, texts back, and books the appointment —
              before your customer calls anyone else.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
            <div className="relative h-[220px] w-full overflow-hidden md:h-[280px] md:max-h-[280px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[400px] lg:max-h-none">
              <Image
                src="/images/hero.webp"
                alt="People connected across a glowing digital network"
                width={1774}
                height={887}
                priority
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="border-t border-line/70 pt-6 lg:col-start-1 lg:row-start-2 lg:self-start">
              <div className="grid gap-5 text-center lg:grid-cols-3 lg:text-left">
                {CAPABILITIES.map((c) => (
                  <div key={c.label}>
                    <p className="text-sm uppercase tracking-[0.14em] text-ash">
                      {c.label}
                    </p>
                    <p className="mt-1 text-ink">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Calculator teaser */}
      <section className="bg-surface pb-24 pt-20 lg:pb-32 lg:pt-20">
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
              immediately. Echo Reconnects responds within seconds, captures
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
                With Echo Reconnects
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

          <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {HOMEPAGE_SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon];
              const pillar = service.slug === "ai-receptionist" ? "reception" : "automation";
              const href = service.slug === "ai-receptionist"
                ? "/services/ai-receptionist"
                : `/services#${service.slug}`;
              return (
                <Reveal key={service.slug} delay={i * 60}>
                  <Link href={href} className="group block">
                    <IconBadge pillar={pillar} size="md">
                      <Icon />
                    </IconBadge>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-ash">{service.shortDescription}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>

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
            how Echo Reconnects can help you respond faster, book more
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
