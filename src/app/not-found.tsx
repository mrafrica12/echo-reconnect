import type { Metadata } from "next";
import Link from "next/link";
import BookingCta from "@/components/ghl/BookingCta";
import { ArrowRightIcon } from "@/components/EchoIcons";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page doesn't exist. Find services, the missed call calculator, or get in touch with Echo Reconnects.",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { href: "/services", label: "Services", detail: "What we build and how it fits together." },
  { href: "/calculator", label: "Revenue calculator", detail: "What missed calls are costing you." },
  { href: "/faq", label: "FAQ", detail: "Setup, pricing, and what happens next." },
  { href: "/contact", label: "Contact", detail: "Phone, email, chat, or a message." },
];

export default function NotFound() {
  return (
    <section className="px-6 py-28 lg:px-10 lg:py-40">
      <div className="container-wide">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          That page didn&apos;t pick up.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ash">
          The link may be out of date, or the page may have moved. Here&apos;s
          where most people are headed.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-4xl">
          {DESTINATIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_24px_50px_-30px_rgba(11,34,68,0.45)]"
            >
              <span>
                <span className="block font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm text-ash">
                  {item.detail}
                </span>
              </span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-halo text-accent transition-transform group-hover:translate-x-1">
                <ArrowRightIcon width={14} height={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <BookingCta source="404" className="btn-primary">
            Book your free consultation
          </BookingCta>
          <Link href="/" className="btn-ghost">
            Back to home
            <span className="chip">
              <ArrowRightIcon width={14} height={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
