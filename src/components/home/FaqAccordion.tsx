"use client";

import { useState } from "react";
import Link from "next/link";
import AccordionItem from "@/components/faq/AccordionItem";

const FAQS = [
  {
    q: "What happens when I miss a call?",
    a: "Your customer gets a text within seconds, asking how we can help and offering a link to book. No hold music. No voicemail.",
  },
  {
    q: "Will this work with my current phone number?",
    a: "Yes. We connect to the number you already use. Nothing changes for your customers.",
  },
  {
    q: "How fast can this go live?",
    a: "Most businesses are live within 48 to 72 hours.",
  },
  {
    q: "What if my business gets a lot of calls?",
    a: "The system scales with you. Ten missed calls a day or two hundred, every one gets a response.",
  },
  {
    q: "Do I need to be tech-savvy?",
    a: "No. We set everything up. You just start getting bookings.",
  },
  {
    q: "How much revenue can this actually recover?",
    a: "Most clients recover 60 to 95% of the business they were losing to missed calls. Use the calculator to see your number.",
  },
];

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
