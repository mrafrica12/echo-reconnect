"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";

// Renders nothing when TESTIMONIALS is empty rather than showing placeholder
// or fabricated quotes. See src/data/testimonials.ts for how to add real,
// approved testimonials.
export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (TESTIMONIALS.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  if (TESTIMONIALS.length === 0) return null;

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
        {current.name} &middot; {current.role}, {current.company}
      </p>
      {current.result && (
        <p className="mt-1 text-sm text-ash/80">{current.result}</p>
      )}

      {TESTIMONIALS.length > 1 && (
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
      )}
    </div>
  );
}
