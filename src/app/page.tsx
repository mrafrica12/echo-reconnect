import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import CalculatorTeaser from "@/components/home/CalculatorTeaser";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FaqAccordion from "@/components/home/FaqAccordion";
import BookingCta from "@/components/ghl/BookingCta";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarIcon,
  HaloBadge,
  ICONS,
  PhoneIcon,
  SpeechBubbleIcon,
  TargetIcon,
  TwentyFourSevenGlyph,
} from "@/components/EchoIcons";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";
import { HOME_FAQS } from "@/lib/faq-data";
import {
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  faqPageJsonLd,
  reviewsJsonLd,
} from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Never miss another call",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  title: { absolute: "Echo Reconnects — Never miss another call." },
};

const CAPABILITIES = [
  {
    label: "Instant Response",
    detail: "Replies within seconds, day or night.",
    glyph: <BoltIcon width={24} height={24} />,
  },
  {
    label: "24/7 Automation",
    detail: "Always on, even after you close.",
    glyph: <TwentyFourSevenGlyph />,
  },
  {
    label: "Real-Time Tracking",
    detail: "See every lead and booking as it happens.",
    glyph: <TargetIcon width={24} height={24} />,
  },
];

// The three channels called out over the hero photograph, matched to the
// order a recovered call actually travels: ring, text back, book. Each pin
// pulses in its own colour, staggered so they fire in that same sequence —
// sky for the incoming call, brand orange for the text, green for the
// confirmed booking. Delays are spaced across the 4.8s cycle in globals.css.
const HERO_PINS = [
  {
    label: "Call",
    glyph: PhoneIcon,
    left: "31%",
    top: "15%",
    drop: "3.5rem",
    color: "#38BDF8",
    delay: "0s",
  },
  {
    label: "Text",
    glyph: SpeechBubbleIcon,
    left: "56%",
    top: "11%",
    drop: "4.5rem",
    color: "#F2801E",
    delay: "1.6s",
  },
  {
    label: "Book",
    glyph: CalendarIcon,
    left: "82%",
    top: "17%",
    drop: "3rem",
    color: "#34D399",
    delay: "3.2s",
  },
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

// Marks up the same questions the accordion below renders, so an answer
// engine can quote them without crawling through to /faq.
const homeFaqJsonLd = faqPageJsonLd(HOME_FAQS);

// Null until a real testimonial is approved — see data/testimonials.ts.
const homeReviewsJsonLd = reviewsJsonLd(TESTIMONIALS);

export default function Home() {
  return (
    <>
      <JsonLd data={homeFaqJsonLd} />
      {homeReviewsJsonLd && <JsonLd data={homeReviewsJsonLd} />}

      {/* Hero — type column on the left, photograph bleeding off the top
          and right edge with a chevron cut so the two read as one plane. */}
      <section className="relative overflow-hidden pt-6 lg:pt-0">
        <div className="container-wide relative px-6 lg:px-10">
          <div className="relative z-10 max-w-xl py-8 lg:w-[58%] lg:max-w-none lg:py-28">
            <Reveal>
              <p className="eyebrow">
                Helping businesses capture every opportunity
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-[3.25rem] font-bold leading-[0.97] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[5.25rem]">
                {/* The space before the break matters: without it the h1's
                    text content extracts as "Never missanother call." */}
                Never miss{" "}
                <br />
                another <span className="text-accent">call.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ash">
                Echo Reconnects answers, texts back, and books the appointment —
                before your customer calls anyone else.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
                <BookingCta source="Hero" className="btn-primary">
                  <CalendarIcon width={20} height={20} />
                  Book your free consultation
                </BookingCta>
                <Link href="/calculator" className="btn-ghost">
                  See what a missed call costs you
                  <span className="chip">
                    <ArrowRightIcon width={14} height={14} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300}>
          <div className="relative mt-2 h-[260px] w-full sm:h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[50%]">
            <div className="hero-clip relative h-full w-full overflow-hidden rounded-t-3xl">
              <Image
                src="/images/hero.webp"
                alt="People connected across a glowing digital network"
                width={1774}
                height={887}
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0">
                {HERO_PINS.map((pin) => {
                  const Glyph = pin.glyph;
                  return (
                    <div
                      key={pin.label}
                      className="absolute flex -translate-x-1/2 flex-col items-center"
                      style={
                        {
                          left: pin.left,
                          top: pin.top,
                          "--pin": pin.color,
                          "--pin-delay": pin.delay,
                        } as React.CSSProperties
                      }
                    >
                      <span className="hero-pin flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-[2px] lg:h-14 lg:w-14">
                        <Glyph width={22} height={22} />
                      </span>
                      <span
                        className="hero-pin-line mt-2 w-px border-l border-dashed border-white/60"
                        style={{ height: pin.drop }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Capability strip + live cost slider, lifted onto the hero */}
      <section className="relative z-20 px-6 pb-16 lg:-mt-24 lg:px-10 lg:pb-0">
        <div className="container-wide">
          <Reveal>
            <div className="card-elevated relative px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
              <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
                {CAPABILITIES.map((c, i) => (
                  <div
                    key={c.label}
                    className={`flex items-start gap-5 sm:px-6 lg:px-8 ${
                      i > 0 ? "sm:border-l sm:border-line" : ""
                    } ${i === 0 ? "sm:pl-0" : ""} ${
                      i === CAPABILITIES.length - 1 ? "sm:pr-0" : ""
                    }`}
                  >
                    <HaloBadge>{c.glyph}</HaloBadge>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                        {c.label}
                      </p>
                      <p className="mt-1.5 leading-relaxed text-ash">
                        {c.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-line pt-10">
                <CalculatorTeaser />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem / urgency */}
      <section className="px-6 py-28 lg:py-36">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
              A missed call can become a lost customer.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ash">
              When customers can&apos;t reach you, many call the next business
              immediately. Echo Reconnects responds within seconds, captures
              what they need, and gives them a direct path to book.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <Reveal delay={60}>
              <div className="h-full rounded-2xl border border-line bg-surface/60 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ash">
                  Without a response system
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {CONSEQUENCES.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ash">
                      <span className="h-1.5 w-1.5 rounded-full bg-flare" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-elevated h-full p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  With Echo Reconnects
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {RESPONSES.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-surface px-6 py-28 lg:py-36">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">What we build</p>
            <h2 className="mt-6 max-w-lg font-display text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
              One system behind every conversation.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {HOMEPAGE_SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon];
              const href = `/services/${service.slug}`;
              return (
                <Reveal key={service.slug} delay={i * 60}>
                  <Link
                    href={href}
                    className="group block h-full rounded-2xl border border-line bg-paper/70 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:bg-surface hover:shadow-[0_24px_50px_-30px_rgba(11,34,68,0.45)]"
                  >
                    <HaloBadge size={48}>
                      <Icon width={24} height={24} />
                    </HaloBadge>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ash">
                      {service.shortDescription}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex justify-center">
              <Link href="/services" className="btn-ghost">
                Explore services
                <span className="chip">
                  <ArrowRightIcon width={14} height={14} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Simple Setup */}
      <section className="px-6 py-28 lg:py-36">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Simple setup</p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
              Live in days, not months.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-white">
                    {step.n}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-14 top-1/2 hidden h-px w-[calc(100%-2.25rem)] bg-line lg:block"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ash">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — renders nothing until a real, approved quote exists */}
      {TESTIMONIALS.length > 0 && (
        <section className="band-navy py-28 lg:py-36">
          <Reveal>
            <div className="[&_p]:text-paper [&_.text-ash]:text-white/60 [&_.bg-line]:bg-white/20">
              <TestimonialCarousel />
            </div>
          </Reveal>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-surface px-6 py-28 lg:py-36">
        <div className="container-copy">
          <Reveal>
            <p className="eyebrow text-center">Questions</p>
            <h2 className="mt-5 text-center font-display text-4xl font-bold tracking-tight text-ink lg:text-5xl">
              Everything you were about to ask.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-16">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand source="Homepage Final CTA" />
    </>
  );
}
