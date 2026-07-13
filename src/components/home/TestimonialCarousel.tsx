"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Echo Reconnect recovered 70% of our missed calls. Our revenue is up significantly.",
    name: "Sarah Chen",
    role: "Owner, Premier Home Services",
  },
  {
    quote:
      "The booking system saved us hours every day. We can't imagine going back.",
    name: "Marcus Rodriguez",
    role: "Operations Manager, Elite Dental",
  },
  {
    quote:
      "They understand automation and revenue at the same time. Every workflow was built to convert.",
    name: "Emily Watson",
    role: "CEO, BrightPath Consulting",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <div className="container-copy px-6 text-center">
      <p
        key={index}
        className="font-display text-3xl font-medium leading-snug text-ink transition-opacity duration-500 sm:text-4xl"
      >
        &ldquo;{current.quote}&rdquo;
      </p>
      <p className="mt-6 text-ash">
        {current.name} &middot; {current.role}
      </p>

      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            aria-current={i === index}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-accent" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
