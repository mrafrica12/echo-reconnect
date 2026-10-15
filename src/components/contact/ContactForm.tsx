"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

const INPUT_CLASS =
  "mt-2 w-full rounded-xl border border-transparent bg-white px-4 py-3.5 text-ink shadow-sm outline-none transition focus:border-ink/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

const CONTACT_METHODS = ["Phone", "Email", "Text"] as const;

export default function ContactForm() {
  const [serviceInterest, setServiceInterest] = useState("Social Media Marketing");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  // Stamped once on mount; the API rejects submissions faster than a human
  // could realistically fill the form out.
  const [formLoadedAt] = useState(() => Date.now());

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;
    setFormValues(values);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "Contact Page" }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      // Fires only on an accepted lead, so the count matches real inbound.
      track("contact_form_submit", { source: "Contact Page" });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="font-display text-3xl font-semibold text-ink">Message received.</p>
        <p className="mt-3 text-ash">Thank you. We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from sighted users and screen readers alike; a
          filled value means a bot filled every field, so the API silently
          discards the submission. Named to avoid the real "website" field. */}
      <input
        type="text"
        name="hp_field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        defaultValue=""
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <input type="hidden" name="form_loaded" value={formLoadedAt} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={formValues.name}
          className={INPUT_CLASS}
        />
      </div>
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-ink">
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          required
          defaultValue={formValues.business}
          className={INPUT_CLASS}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={formValues.email}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            defaultValue={formValues.phone}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-ink">Service interest</label>
        <select id="serviceInterest" name="serviceInterest" value={serviceInterest} onChange={e => setServiceInterest(e.target.value)} className={INPUT_CLASS}>
          {["Social Media Marketing", "AI Receptionist", "Other Services", "Not Sure"].map(service => <option key={service}>{service}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-ink">Website or social profile link (optional)</label>
        <input id="website" name="website" type="url" placeholder="https://" defaultValue={formValues.website} className={INPUT_CLASS} />
      </div>
      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-ink">Main business goal</label>
        <input id="challenge" name="challenge" type="text" defaultValue={formValues.challenge} className={INPUT_CLASS} />
      </div>
      {serviceInterest === "AI Receptionist" && <fieldset className="rounded-2xl border border-line p-5">
        <legend className="px-2 text-sm font-medium text-ink">Call handling (optional)</legend>
        <label htmlFor="missedCallsPerDay" className="block text-sm font-medium text-ink">Approximate missed calls per day</label>
        <input id="missedCallsPerDay" name="missedCallsPerDay" type="number" min="0" step="1" className={INPUT_CLASS} />
        <label htmlFor="bookingProcess" className="mt-5 block text-sm font-medium text-ink">How do you currently handle booking?</label>
        <input id="bookingProcess" name="bookingProcess" type="text" className={INPUT_CLASS} />
      </fieldset>}
      <fieldset>
        <legend className="text-sm font-medium text-ink">Preferred contact method</legend>
        <div className="mt-3 flex flex-wrap gap-5">{CONTACT_METHODS.map(method => <label key={method} className="flex min-h-11 items-center gap-2 text-ink">
          <input type="radio" name="preferredContact" value={method} defaultChecked={method === "Email"} className="accent-accent" />{method}
        </label>)}</div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={formValues.message}
          className="mt-2 w-full resize-none rounded-xl border border-transparent bg-white px-4 py-3.5 text-ink shadow-sm outline-none transition focus:border-ink/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        />
      </div>

      <p className="text-xs text-ash/80">
        By submitting, you agree to be contacted about your inquiry. See our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Privacy Policy
        </a>
        .
      </p>

      {/* Navy is the resting brand colour now, so the alert needs the warm
          accent to still read as something that went wrong. */}
      {error && <p role="alert" className="text-sm text-flare-ink">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-full rounded-full bg-accent px-7 py-4 text-base font-medium text-white transition-colors hover:bg-accent-strong disabled:opacity-50 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
