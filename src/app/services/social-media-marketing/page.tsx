import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import MarketingProcess from "@/components/MarketingProcess";
import BookingCta from "@/components/ghl/BookingCta";
import FaqAccordion from "@/components/home/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/data/services";
import { MARKETING_FAQS } from "@/lib/faq-data";
import { breadcrumbJsonLd, createPageMetadata, faqPageJsonLd, serviceJsonLd } from "@/lib/seo";

const service = SERVICES.find(s => s.slug === "social-media-marketing")!;
export const metadata = createPageMetadata({ title: service.title, description: service.metaDescription, path: "/services/social-media-marketing" });
export default function MarketingPage() {
  return <>
    <JsonLd data={serviceJsonLd(service.slug)} />
    <JsonLd data={faqPageJsonLd(MARKETING_FAQS)} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }])} />
    <PageHeader eyebrow="Our main service" title="Social media marketing." accent="Stay connected." description={service.shortDescription} actions={<BookingCta source="Social Media Marketing Hero" className="btn-primary">Book a Marketing Consultation</BookingCta>} />
    <section className="px-6 py-24 lg:px-10"><div className="container-wide grid gap-12 lg:grid-cols-2">
      <div><p className="eyebrow">Who it’s for</p><h2 className="mt-5 font-display text-3xl font-bold">For businesses ready to show up more consistently.</h2><p className="mt-5 text-lg leading-relaxed text-ash">If posting keeps slipping, your message feels unclear, or managing your social presence is taking time away from your business, let’s talk about the support you need.</p></div>
      <div className="rounded-2xl border border-line bg-surface p-8"><p className="eyebrow">Scope built around you</p><h2 className="mt-5 font-display text-3xl font-bold">Start with your goals.</h2><p className="mt-5 text-lg leading-relaxed text-ash">{service.fullDescription}</p><p className="mt-5 leading-relaxed text-ash">Bring your website or social profiles and a main business goal to the conversation. We’ll discuss what’s useful, what’s practical, and how to get started.</p><Link href="/contact" className="btn-ghost mt-6">Send a marketing enquiry →</Link></div>
    </div></section>
    <MarketingProcess />
    <section className="bg-surface px-6 py-24"><div className="container-copy"><p className="eyebrow">Before we begin</p><h2 className="mt-5 font-display text-4xl font-bold">Your marketing questions.</h2><div className="mt-10"><FaqAccordion /></div></div></section>
    <CtaBand source="Social Media Marketing Final" />
  </>;
}
