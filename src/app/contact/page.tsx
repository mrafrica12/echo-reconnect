import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, HaloBadge } from "@/components/EchoIcons";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY } from "@/data/company";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Free Consultation",
  description:
    "Have a question about Echo Reconnects? Reach us by phone, email, or AI chat, or send a message and we'll get back to you shortly.",
  path: "/contact",
});

const breadcrumb = breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);

const CONTACT_OPTIONS = [
  {
    label: "Email us",
    value: COMPANY.email,
    href: COMPANY.emailHref,
    icon: "email",
  },
  {
    label: "Call us",
    value: COMPANY.phoneDisplay,
    href: COMPANY.phoneHref,
    icon: "phone",
  },
  {
    label: "Chat with Echo",
    value: "Available 24/7",
    href: "/chat",
    icon: "chat",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 6.75h16.5v10.5H3.75z" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7.2 3.75H4.5c-.4 0-.75.35-.75.75 0 8.7 7.05 15.75 15.75 15.75.4 0 .75-.35.75-.75v-2.7l-4.05-1.35-1.2 2.1a13.5 13.5 0 0 1-8.55-8.55l2.1-1.2L7.2 3.75Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5.25h16v11.5H9l-5 3v-14.5Z" />
      <path d="M8 10.75h8M8 7.75h5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHeader
        eyebrow="Contact"
        title="How can"
        accent="we help?"
        description="Choose the easiest way to reach us, or send a message below. A real person will follow up shortly."
      />

      <section className="px-6 pb-28 pt-16 lg:px-10 lg:pb-36">
        <div className="container-wide">

        <Reveal delay={80}>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {CONTACT_OPTIONS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex min-h-52 flex-col justify-center rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_50px_-30px_rgba(11,34,68,0.45)]"
              >
                <HaloBadge size={48}>
                  <ContactIcon type={item.icon} />
                </HaloBadge>
                <span className="mt-5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">{item.label}</span>
                <span className="mt-2 text-sm leading-relaxed text-ash">{item.value}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">Connect<ArrowRightIcon width={13} height={13} /></span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-24 overflow-hidden rounded-[2.5rem] bg-surface px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16 lg:py-16">
            <div className="max-w-sm">
              <p className="eyebrow">Send a message</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                Tell us what you&apos;re working on.
              </h2>
              <p className="mt-5 leading-relaxed text-ash">
                Share a few details and we&apos;ll point you toward the right next step—without a hard sell.
              </p>
              <div className="mt-8 border-t border-line pt-6 text-sm text-ash">
                <p className="font-medium text-ink">Based in {COMPANY.location}</p>
                <p className="mt-2">Most messages receive a response within one business day.</p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 text-center text-sm text-ash">
            Prefer a quick answer? Use the AI Chat button in the bottom corner anytime.
          </p>
        </Reveal>
        </div>
      </section>
    </>
  );
}
