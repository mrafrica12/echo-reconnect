import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a question about Echo Reconnect? Reach us by phone, email, or AI chat, or send a message and we'll get back to you shortly.",
};

const CONTACT_ITEMS = [
  { label: "Email", value: COMPANY.email, href: COMPANY.emailHref },
  { label: "Phone", value: COMPANY.phoneDisplay, href: COMPANY.phoneHref },
  { label: "Location", value: COMPANY.location },
  { label: "AI Chat", value: "Available 24/7", href: "/chat" },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="container-content">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.14em] text-ash">
            Contact
          </p>
          <h1 className="mt-6 max-w-lg font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            Let&apos;s start a conversation.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <dl className="flex flex-col gap-8">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="border-t border-line pt-6">
                  <dt className="text-sm text-ash">{item.label}</dt>
                  <dd className="mt-1 text-xl text-ink">
                    {item.href ? (
                      <Link href={item.href} className="hover:text-accent transition-colors">
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
