import Link from "next/link";
import Reveal from "@/components/Reveal";
import BookingCta from "@/components/ghl/BookingCta";
import { ArrowRightIcon } from "@/components/EchoIcons";

/**
 * The navy closing band every page ends on.
 *
 * Was copy-pasted across five pages with drifting padding, button styles and
 * footnotes; centralising it means the last thing a visitor sees is the same
 * on every route. `source` is what shows up in the booking analytics, so it
 * should name the page.
 */
export default function CtaBand({
  title = "Stop losing opportunities when you miss a call.",
  description = "See what missed calls may be costing your business and discover how Echo Reconnects can help you respond faster, book more appointments, and track every opportunity.",
  source,
  secondary = { href: "/calculator", label: "Calculate lost revenue" },
  footnote = "No technical setup required from your team.",
}: {
  title?: string;
  description?: string;
  source: string;
  secondary?: { href: string; label: string } | null;
  footnote?: string | null;
}) {
  return (
    <section className="band-navy px-6 py-28 text-center lg:px-10 lg:py-36">
      <Reveal>
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/75">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <BookingCta
            source={source}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base text-accent shadow-[0_12px_28px_-14px_rgba(0,0,0,0.6)] transition-colors hover:bg-flare hover:text-white"
          >
            Book your free consultation
          </BookingCta>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-3 border-b border-white/40 pb-2 text-base text-white transition-colors hover:border-flare hover:text-flare"
            >
              {secondary.label}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowRightIcon width={14} height={14} />
              </span>
            </Link>
          ) : null}
        </div>
        {footnote ? (
          <p className="mt-8 text-sm text-white/50">{footnote}</p>
        ) : null}
      </Reveal>
    </section>
  );
}
