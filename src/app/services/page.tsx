import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ArrowRightIcon, HaloBadge, IconBadge, ICONS } from "@/components/EchoIcons";
import JsonLd from "@/components/JsonLd";
import { SERVICES, GROWTH_SERVICES, PILLARS } from "@/data/services";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  ORGANIZATION_ID,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Reception & Automation Services",
  description:
    "Echo Reconnects builds custom automation systems that turn missed calls into booked appointments and recovered revenue for your business.",
  path: "/services",
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Echo Reconnects automation services",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${SITE_URL}/services/${service.slug}#service`,
      name: service.title,
      description: service.shortDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: [
        { "@type": "City", name: "Atlanta" },
        { "@type": "Country", name: "United States" },
      ],
    },
  })),
};

const servicesBreadcrumb = breadcrumbJsonLd([
  { name: "Services", path: "/services" },
]);

const INTEGRATION_POINTS = [
  "Phone system",
  "Calendar",
  "Website forms",
  "CRM",
  "Email",
  "SMS",
];

const CONFIGURATION_FACTORS = [
  "Business hours",
  "Call volume",
  "Service types",
  "Team assignments",
  "Locations",
  "Appointment rules",
  "Follow-up timing",
  "Escalation requirements",
  "Reporting needs",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <JsonLd data={servicesBreadcrumb} />
      <PageHeader
        eyebrow="Services"
        title="Automation that turns missed calls"
        accent="into revenue."
        description="Three layers, built around how your business already runs — not a fixed template."
      />

      {PILLARS.map((pillar, pillarIndex) => {
        const PillarIcon = ICONS[pillar.icon];
        const pillarServices = SERVICES.filter((s) => s.pillar === pillar.id);

        return (
          <section
            key={pillar.id}
            className={pillarIndex % 2 === 1 ? "bg-surface px-6 py-24 lg:py-32" : "px-6 py-24 lg:py-32"}
          >
            <div className="container-wide">
              <Reveal>
                <div className="flex items-center gap-5">
                  <IconBadge pillar={pillar.id} size="lg">
                    <PillarIcon />
                  </IconBadge>
                  <div>
                    <p className="eyebrow">
                      {pillar.title}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-ink lg:text-3xl">
                      {pillar.intro}
                    </h2>
                  </div>
                </div>
              </Reveal>

              {pillar.id !== "growth" ? (
                /* Summaries only. The full description and outcome list live
                   on each service's own page — repeating them here made the
                   two URLs near-duplicates competing for the same query. */
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                  {pillarServices.map((service, i) => {
                    const ServiceIcon = ICONS[service.icon];
                    return (
                      <Reveal key={service.slug} delay={i * 60}>
                        <Link
                          id={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex h-full scroll-mt-24 items-start gap-5 rounded-2xl border border-line bg-paper/70 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:bg-surface hover:shadow-[0_24px_50px_-30px_rgba(11,34,68,0.45)]"
                        >
                          <HaloBadge size={48}>
                            <ServiceIcon width={24} height={24} />
                          </HaloBadge>
                          <span>
                            <span className="block font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                              {service.title}
                            </span>
                            <span className="mt-2 block leading-relaxed text-ash">
                              {service.shortDescription}
                            </span>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                              How it works
                              <ArrowRightIcon width={13} height={13} />
                            </span>
                          </span>
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              ) : (
                <div id="growth-services" className="mt-16 scroll-mt-24 border-t border-line pt-12">
                  <Reveal>
                    <p className="max-w-lg text-lg text-ash">
                      Once your calls are being answered and your follow-up
                      runs itself, the next constraint is usually visibility.
                      These services are available to existing automation
                      clients as scope allows.
                    </p>
                  </Reveal>
                  <div className="mt-12 grid gap-10 sm:grid-cols-2">
                    {GROWTH_SERVICES.map((item, i) => {
                      const GrowthIcon = ICONS[item.icon];
                      return (
                        <Reveal key={item.slug} delay={i * 60}>
                          <div className="flex gap-4">
                            <IconBadge pillar="growth" size="sm">
                              <GrowthIcon />
                            </IconBadge>
                            <div>
                              <h3 className="font-display text-xl text-ink">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-ash">{item.description}</p>
                            </div>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>
                  <Reveal delay={240}>
                    <p className="mt-12 max-w-lg text-sm text-ash">
                      Growth services are scoped separately from automation
                      systems. Availability depends on project scope.
                    </p>
                  </Reveal>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Built Around Your Existing Business */}
      <section className="bg-surface px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              Built around your existing business
            </p>
            <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-tight text-ink lg:text-4xl">
              We connect to what you already use.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ash">
              Echo Reconnects systems may integrate with your existing phone,
              calendar, forms, CRM, email, and SMS tools, depending on
              technical compatibility and project scope.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {INTEGRATION_POINTS.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-ink"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Not a One-Size-Fits-All Template */}
      <section className="px-6 lg:px-10 py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">
              Not a one-size-fits-all template
            </p>
            <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-tight text-ink lg:text-4xl">
              Every workflow is configured, not copied.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ash">
              Your workflows are set up around the details specific to your
              business:
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-3">
              {CONFIGURATION_FACTORS.map((factor) => (
                <li key={factor} className="text-ink">
                  {factor}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand source="Services" title="Ready to stop losing opportunities?" />
    </>
  );
}
