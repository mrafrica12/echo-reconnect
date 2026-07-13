"use client";

import { useState } from "react";

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
    q: "What if a customer prefers to talk instead of text?",
    a: "They can call back any time. The text is a backup, not a replacement.",
  },
  {
    q: "How much revenue can this actually recover?",
    a: "Most clients recover 60 to 95% of the business they were losing to missed calls. Use the calculator to see your number.",
  },
  {
    q: "Can I customize the messages?",
    a: "Yes. Every message is written in your voice, for your business.",
  },
  {
    q: "What happens if I don't use something like this?",
    a: "The call goes to voicemail. Most people don't leave one. They call the next business instead.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container-copy px-6">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-lg text-ink">{item.q}</span>
              <span
                className={`shrink-0 text-xl text-ash transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-ash">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
