import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import FaqKnowledgeCenter from "@/components/faq/FaqKnowledgeCenter";
import { FAQ_CATEGORIES } from "@/lib/faq-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Missed Call & AI Receptionist FAQ",
  description:
    "Answers to common questions about missed call recovery, automated booking, pricing, and setup with Echo Reconnects.",
  path: "/faq",
});

const faqJsonLd = faqPageJsonLd(
  FAQ_CATEGORIES.flatMap((category) => category.items)
);

const faqBreadcrumb = breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }]);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={faqBreadcrumb} />

      <PageHeader
        eyebrow="Knowledge Center"
        title="Questions,"
        accent="answered."
        description="Everything you need to know about how Echo Reconnects works, what it costs, and what happens after you sign up."
      />

      <section className="px-6 pb-28 pt-16 lg:px-10 lg:pb-36">
        <FaqKnowledgeCenter />
      </section>
      <CtaBand source="FAQ Page" />
    </>
  );
}
