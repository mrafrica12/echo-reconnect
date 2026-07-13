import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FaqKnowledgeCenter from "@/components/faq/FaqKnowledgeCenter";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about missed call recovery, automated booking, pricing, and setup with Echo Reconnect.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Reveal>
        <div className="container-copy text-center">
          <p className="text-sm uppercase tracking-[0.14em] text-ash">
            Knowledge Center
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            Questions, answered.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-ash">
            Everything you need to know about how Echo Reconnect works,
            what it costs, and what happens after you sign up.
          </p>
        </div>
      </Reveal>

      <div className="mt-20">
        <FaqKnowledgeCenter />
      </div>
    </section>
  );
}
