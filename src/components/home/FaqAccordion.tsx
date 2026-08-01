"use client";

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "@/components/faq/AccordionItem";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

// Curated set of the six highest-intent questions, pulled from the single
// source of truth in faq-data.ts so answers can't drift out of sync with the
// full /faq page.
const PREVIEW_QUESTIONS = [
  "What happens when I miss a call?",
  "Will this work with my current phone number?",
  "How fast can this go live?",
  "What if my business gets a lot of calls?",
  "Do I need to be tech-savvy?",
  "How much revenue can this actually recover?",
];

const ALL_ITEMS = FAQ_CATEGORIES.flatMap((category) => category.items);
const FAQS = PREVIEW_QUESTIONS.map(
  (q) => ALL_ITEMS.find((item) => item.q === q)!
).filter(Boolean);

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
          className="inline-block border-b border-ink text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View all questions
        </Link>
      </div>
    </div>
  );
}
