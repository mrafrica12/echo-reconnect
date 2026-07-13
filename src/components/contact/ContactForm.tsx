"use client";

import { useState, type FormEvent } from "react";

// TODO(backend): wire this up to a real submission endpoint (email/CRM/Twilio) later.
// This is intentionally a visual-only stub for the frontend redesign pass.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-t border-line pt-8">
        <p className="font-display text-2xl text-ink">Message received.</p>
        <p className="mt-2 text-ash">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <label htmlFor="name" className="block text-sm text-ash">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-ash">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-ash">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-2 w-full resize-none rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        />
      </div>
      <button
        type="submit"
        className="mt-2 self-start rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
      >
        Send message
      </button>
    </form>
  );
}
