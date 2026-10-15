import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import MarketingProcess from "@/components/MarketingProcess";
import FaqAccordion from "@/components/home/FaqAccordion";
import BookingCta from "@/components/ghl/BookingCta";
import { ArrowRightIcon, CalendarIcon } from "@/components/EchoIcons";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faq-data";
import { createPageMetadata, DEFAULT_DESCRIPTION, faqPageJsonLd } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({ title: "Social Media Marketing", description: DEFAULT_DESCRIPTION, path: "/" }),
  title: { absolute: "Social Media Marketing | Echo Reconnects" },
};

const CHALLENGES = [
  ["Posting feels inconsistent", "Busy weeks can leave your social presence quiet just when customers are looking."],
  ["Your message isn’t clear", "It can be hard to explain what you do and why it matters in a way people understand."],
  ["Your presence feels disconnected", "Different posts and profiles don’t always tell the same story about your business."],
  ["Your time is already full", "Managing a social presence competes with the everyday work of running a business."],
];

export default function Home() {
  return <>
    <JsonLd data={faqPageJsonLd(HOME_FAQS)} />
    <section className="relative overflow-hidden pt-6 lg:pt-0">
      <div className="container-wide relative px-6 lg:px-10">
        <div className="relative z-10 max-w-xl py-10 lg:w-[58%] lg:max-w-none lg:py-24">
          <Reveal><p className="eyebrow">Social Media Marketing</p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">Marketing that keeps you <span className="text-accent">connected.</span></h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ash">Build a consistent social presence that helps customers understand your business and take the next step.</p>
            <div className="mt-10 flex flex-col items-start gap-5">
              <BookingCta source="Hero" className="btn-primary"><CalendarIcon width={20} height={20} />Book a Marketing Consultation</BookingCta>
              <Link href="/services/social-media-marketing" className="btn-ghost min-h-11">Explore Social Media Marketing<ArrowRightIcon width={18} height={18} className="shrink-0" /></Link>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="relative h-[260px] w-full sm:h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[43%]">
        <div className="hero-clip relative h-full w-full overflow-hidden rounded-t-3xl">
          <Image src="/images/hero.webp" alt="People connected across a glowing digital network" width={1774} height={887} priority sizes="(max-width: 1023px) 100vw, 43vw" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
    <section className="px-6 py-24 lg:px-10 lg:py-32"><div className="container-wide">
      <Reveal><p className="eyebrow">Sound familiar?</p><h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight lg:text-5xl">Running your business is a full day. Showing up online is another job.</h2></Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">{CHALLENGES.map(([title, detail], i) => <Reveal key={title} delay={i * 60}><div className="h-full rounded-2xl border border-line bg-surface/60 p-8"><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-ash">{detail}</p></div></Reveal>)}</div>
    </div></section>
    <section className="bg-surface px-6 py-24 lg:px-10 lg:py-32"><div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
      <Reveal><p className="eyebrow">Our main focus</p><h2 className="mt-5 font-display text-4xl font-bold tracking-tight lg:text-5xl">A social presence that feels like your business.</h2></Reveal>
      <Reveal delay={80}><p className="text-xl leading-relaxed text-ink">Social media marketing starts with a clear understanding of what you do, who you serve, and what you want to say.</p><p className="mt-5 text-lg leading-relaxed text-ash">We’ll agree the platforms, content needs, and level of support during your consultation. You can work with us on marketing on its own, with no automation purchase required.</p><Link href="/services/social-media-marketing" className="btn-primary mt-8">Explore Social Media Marketing<ArrowRightIcon width={18} height={18} className="shrink-0" /></Link></Reveal>
    </div></section>
    <MarketingProcess />
    <section className="px-6 pb-24 lg:px-10 lg:pb-32"><div className="container-wide rounded-3xl border border-line bg-surface p-8 sm:p-12"><Reveal><p className="eyebrow">Additional product · AI receptionist</p><h2 className="mt-5 font-display text-3xl font-bold tracking-tight lg:text-4xl">Additional support for incoming calls.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ash">An AI receptionist can help answer calls, capture enquiries, and support booking, depending on configuration. It is scoped separately and is not included in social media marketing.</p><Link href="/services/ai-receptionist" className="btn-ghost mt-8">Explore the AI Receptionist<ArrowRightIcon width={18} height={18} /></Link></Reveal></div></section>
    <section className="bg-surface px-6 py-24 lg:py-32"><div className="container-copy"><Reveal><p className="eyebrow">Marketing questions</p><h2 className="mt-5 font-display text-4xl font-bold tracking-tight">Let’s make the next step clear.</h2><div className="mt-12"><FaqAccordion /></div></Reveal></div></section>
    <CtaBand source="Homepage Final CTA" />
  </>;
}
