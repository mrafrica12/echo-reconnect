import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookingCta from "@/components/ghl/BookingCta";
import { IconBadge, ICONS } from "@/components/EchoIcons";
import { SERVICES, GROWTH_SERVICES, PILLARS } from "@/data/services";
import { createPageMetadata, serializeJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
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
      "@id": `${SITE_URL}/services#${service.slug}`,
      name: service.title,
      description: service.fullDescription,
      url: `${SITE_URL}/services#${service.slug}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "City",
        name: "Atlanta",
      },
    },
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesJsonLd) }}
      />
      <section className="px-6 pb-8 pt-28 lg:pt-36">
        <Reveal>
          <div className="container-copy text-center">
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
              Services
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              Automation that turns missed calls into revenue.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-ash">
              Three layers, built around how your business already runs —
              not a fixed template.
            </p>
          </div>
        </Reveal>
      </section>

      {PILLARS.map((pillar, pillarIndex) => {
        const PillarIcon = ICONS[pillar.icon];
        const pillarServices = SERVICES.filter((s) => s.pillar === pillar.id);

        return (
          <section
            key={pillar.id}
            className={pillarIndex % 2 === 1 ? "bg-surface px-6 py-24 lg:py-32" : "px-6 py-24 lg:py-32"}
          >
            <div className="container-content">
              <Reveal>
                <div className="flex items-center gap-5">
                  <IconBadge pillar={pillar.id} size="lg">
                    <PillarIcon />
                  </IconBadge>
                  <div>
                    <p className="text-sm uppercase tracking-[0.14em] text-ash">
                      {pillar.title}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-ink lg:text-3xl">
                      {pillar.intro}
                    </h2>
                  </div>
                </div>
              </Reveal>

              {pillar.id !== "growth" ? (
                <div className="mt-16 flex flex-col gap-24">
                  {pillarServices.map((service, i) => (
                    <Reveal key={service.slug} delay={i * 60}>
                      <div
                        id={service.slug}
                        className="grid scroll-mt-24 gap-6 border-t border-line pt-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
                      >
                        <h3 className="font-display text-3xl font-semibold text-ink lg:text-4xl">
                          {service.title}
                        </h3>
                        <div>
                          <p className="max-w-lg text-lg text-ash">
                            {service.fullDescription}
                          </p>
                          <ul className="mt-6 flex flex-col gap-3">
                            {service.outcomes.map((outcome) => {
                              const OutcomeIcon = ICONS[outcome.icon];
                              return (
                                <li
                                  key={outcome.text}
                                  className="flex items-center gap-3 text-ink"
                                >
                                  <IconBadge pillar={pillar.id} size="sm">
                                    <OutcomeIcon />
                                  </IconBadge>
                                  <span>{outcome.text}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  ))}
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
      <section className="bg-surface px-6 py-24 lg:py-32">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
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
      <section className="px-6 py-24 lg:py-32">
        <div className="container-content">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.14em] text-ash">
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

      <section className="bg-ink px-6 py-32 text-center text-paper lg:py-40">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold lg:text-5xl">
            Ready to stop losing opportunities?
          </h2>
          <BookingCta
            source="Services"
            className="mt-10 inline-block rounded-full bg-accent px-7 py-3.5 text-base text-paper transition-colors hover:bg-white hover:text-ink"
          >
            Book your free consultation
          </BookingCta>
        </Reveal>
      </section>
    </>
  );
}
