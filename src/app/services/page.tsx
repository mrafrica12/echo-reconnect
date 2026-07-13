import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Echo Reconnect builds custom automation systems that turn missed calls into booked appointments and recovered revenue for your business.",
};

const SERVICES = [
  {
    title: "Instant Response",
    body: "Every missed call gets a text back within seconds — before the lead calls anyone else.",
    points: ["Responds within seconds", "Works 24/7, even when you're busy", "Keeps the conversation going"],
  },
  {
    title: "Automatic Booking",
    body: "Leads pick a time and book themselves. Reminders and follow-ups happen without you.",
    points: ["Calendar booking built in", "Follow-ups until they respond", "No manual chasing"],
  },
  {
    title: "Clear Numbers",
    body: "See exactly how many leads you're capturing and what it's worth — no dashboard overwhelm.",
    points: ["Missed calls turned into bookings", "A simple, honest performance view", "ROI you can explain in one sentence"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-8 pt-28 lg:pt-36">
        <Reveal>
          <div className="container-copy text-center">
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Services
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              AI that turns missed calls into revenue.
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="container-content flex flex-col gap-24">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="grid gap-6 border-t border-line pt-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                <h2 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
                  {service.title}
                </h2>
                <div>
                  <p className="max-w-lg text-lg text-ash">{service.body}</p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="text-ink">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
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
