"use client";

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "@/components/faq/AccordionItem";
import { HOME_FAQS as FAQS } from "@/lib/faq-data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container-copy px-6">
      {FAQS.map((item, i) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}

      <div className="pt-10 text-center">
        <Link
          href="/faq"
          className="inline-block border-b border-accent/40 text-accent transition-colors hover:border-accent hover:text-accent-strong"
        >
          View all questions
        </Link>
      </div>
    </div>
  );
}
