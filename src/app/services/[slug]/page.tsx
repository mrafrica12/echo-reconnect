import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { HaloBadge, ArrowRightIcon, ICONS } from "@/components/EchoIcons";
import { SERVICES } from "@/data/services";
import { faqsForService } from "@/lib/faq-data";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

// `/services/ai-receptionist` has its own hand-written page, which takes
// precedence over this dynamic route. Excluding it here keeps the build from
// prerendering a second, thinner version of the same URL.
const GENERATED_SERVICES = SERVICES.filter(
  (service) => service.slug !== "ai-receptionist"
);

export function generateStaticParams() {
  return GENERATED_SERVICES.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = GENERATED_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = GENERATED_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon];

  // Take the three that follow this one, wrapping around, rather than the
  // first three in the list — a fixed slice would have funnelled every
  // internal link into the same handful of pages and left the ones at the
  // end of the array with almost none.
  //
  // Drawn from all SERVICES, not GENERATED_SERVICES: ai-receptionist is
  // excluded from *routing* here because it has its own hand-written page,
  // but it's the flagship service and still needs the inbound links.
  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const related = Array.from({ length: 3 }, (_, offset) =>
    SERVICES[(index + offset + 1) % SERVICES.length]
  ).filter((s) => s.slug !== service.slug);

  const faqs = faqsForService(service.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(service.slug)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqPageJsonLd(faqs)} />}

      {/* Hero */}
      <section className="px-6 pt-20 lg:px-10 lg:pt-28">
        <div className="container-wide">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-ash">
              <Link href="/services" className="transition-colors hover:text-accent">
                Services
              </Link>
              <span className="px-2 text-line" aria-hidden>
                /
              </span>
              <span className="text-ink">{service.title}</span>
            </nav>

            <div className="mt-8 flex items-start gap-5">
              <HaloBadge size={64}>
                <Icon width={30} height={30} />
              </HaloBadge>
              <div>
                <p className="eyebrow">Service</p>
                <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ash">
              {service.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What it does */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              How it works
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-ash">
              {service.fullDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-surface px-6 py-20 lg:px-10 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">What you get</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              What changes once {service.title.toLowerCase()} is live.
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.outcomes.map((outcome, i) => {
              const OutcomeIcon = ICONS[outcome.icon];
              return (
                <Reveal key={outcome.text} delay={i * 60}>
                  <li className="flex h-full items-start gap-4 rounded-2xl border border-line bg-paper/70 p-6">
                    <HaloBadge size={44}>
                      <OutcomeIcon width={22} height={22} />
                    </HaloBadge>
                    <span className="leading-relaxed text-ink">
                      {outcome.text}
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Questions — real answers from the knowledge centre, scoped to this
          service so each page owns content the hub page doesn't repeat. */}
      {faqs.length > 0 && (
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
            <Reveal>
              <p className="eyebrow">Questions</p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                {service.title}, answered.
              </h2>
              <Link href="/faq" className="btn-ghost mt-8">
                All questions
                <span className="chip">
                  <ArrowRightIcon width={14} height={14} />
                </span>
              </Link>
            </Reveal>

            <div>
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 50}>
                  <div className="border-b border-line py-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {faq.q}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ash">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="container-wide">
            <Reveal>
              <p className="eyebrow">Works with</p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                The rest of the system.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((other, i) => {
                const OtherIcon = ICONS[other.icon];
                return (
                  <Reveal key={other.slug} delay={i * 60}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="group block h-full rounded-2xl border border-line bg-paper/70 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:bg-surface hover:shadow-[0_24px_50px_-30px_rgba(11,34,68,0.45)]"
                    >
                      <HaloBadge size={48}>
                        <OtherIcon width={24} height={24} />
                      </HaloBadge>
                      <h3 className="mt-5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                        {other.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ash">
                        {other.shortDescription}
                      </p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <div className="mt-14 flex justify-center">
                <Link href="/services" className="btn-ghost">
                  All services
                  <span className="chip">
                    <ArrowRightIcon width={14} height={14} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}
      <CtaBand
        source={`Service — ${service.title}`}
        title={`See ${service.title.toLowerCase()} on your own numbers.`}
        description="Book a free consultation and we'll walk through how this would be configured for how your business already runs."
      />
    </>
  );
}
