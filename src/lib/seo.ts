import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";

// The apex 308-redirects to www, so every canonical, sitemap entry and
// og:url has to be the www host — pointing them at the apex made search
// engines resolve canonicals through a redirect on every page.
export const SITE_URL = "https://www.echoreconnects.com";
export const SITE_NAME = "Echo Reconnects";
export const DEFAULT_DESCRIPTION =
  "Echo Reconnects answers missed calls, follows up by text, and helps service businesses turn more inquiries into booked appointments.";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// The studio that designed and built this front end. Credited visibly in the
// footer, and machine-readably through the metadata below plus the `creator`
// edge on the WebSite node.
export const BUILDER = {
  name: "UmojaServ",
  url: "https://umojaserv.com/",
  id: "https://umojaserv.com/#organization",
  description:
    "UmojaServ builds connected business systems — websites, booking, CRM, WhatsApp, and payments — for small businesses and diaspora-owned businesses.",
} as const;

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
    },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/** Trail of ancestors for a page, root-first. `/` is prepended for you. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.path === "/" ? SITE_URL : `${SITE_URL}${crumb.path}`,
      })
    ),
  };
}

/** Q&A pairs an answer engine can lift verbatim. */
export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.fullDescription,
    serviceType: service.title,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Service businesses",
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

/**
 * Review markup for approved testimonials.
 *
 * Returns null while there are none, so nothing is emitted until a real,
 * permissioned quote exists — fabricated reviews are a manual-action risk,
 * not just bad practice. Only `status: "approved"` entries are used, which
 * is why this filters rather than taking the array wholesale.
 */
export function reviewsJsonLd(
  testimonials: {
    quote: string;
    name: string;
    company: string;
    status: string;
  }[]
) {
  const approved = testimonials.filter((t) => t.status === "approved");
  if (approved.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    review: approved.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.name },
      itemReviewed: { "@id": ORGANIZATION_ID },
      publisher: { "@type": "Organization", name: t.company },
    })),
  };
}

/**
 * Site-wide entity graph. Kept in one place so the Organization node stays a
 * single `@id` that every other node points at — answer engines resolve the
 * business once instead of guessing across pages.
 */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": ORGANIZATION_ID },
      creator: { "@id": BUILDER.id },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      alternateName: "Echo Reconnect",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-echo-lockup.webp`,
        caption: SITE_NAME,
      },
      image: `${SITE_URL}/images/logo-echo-lockup.webp`,
      description: DEFAULT_DESCRIPTION,
      slogan: "Reconnect with every customer you almost lost.",
      email: COMPANY.email,
      telephone: COMPANY.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Atlanta" },
        { "@type": "Country", name: "United States" },
      ],
      // Topical scope, so an answer engine can match the business to a
      // question rather than only to a brand name.
      knowsAbout: [
        "Missed call recovery",
        "AI receptionist",
        "Automated appointment booking",
        "Lead capture and follow-up automation",
        "Customer relationship management for service businesses",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${SITE_NAME} services`,
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.shortDescription,
            url: `${SITE_URL}/services/${service.slug}`,
          },
        })),
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and customer support",
        telephone: COMPANY.phoneHref.replace("tel:", ""),
        email: COMPANY.email,
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Organization",
      "@id": BUILDER.id,
      name: BUILDER.name,
      url: BUILDER.url,
      description: BUILDER.description,
    },
  ],
};
