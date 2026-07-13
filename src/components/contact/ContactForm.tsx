"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          source: "Contact Page",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
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
      {error && <p className="text-sm text-accent">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 self-start rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
