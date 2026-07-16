"use client";

import { useState, type FormEvent } from "react";

const INPUT_CLASS =
  "mt-2 w-full rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const CONTACT_METHODS = ["Phone", "Email", "Text"] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

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
          defaultValue={formValues.name}
          className={INPUT_CLASS}
        />
      </div>
      <div>
        <label htmlFor="business" className="block text-sm text-ash">
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
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm text-ash">
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
          <label htmlFor="phone" className="block text-sm text-ash">
            Phone
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

      <details className="group">
        <summary className="cursor-pointer list-none text-sm text-ink underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
          Tell us more about your business (optional)
        </summary>
        <div className="mt-6 flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="website" className="block text-sm text-ash">
                Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                defaultValue={formValues.website}
                className={INPUT_CLASS}
              />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm text-ash">
                Industry
              </label>
              <input
                id="industry"
                name="industry"
                type="text"
                defaultValue={formValues.industry}
                className={INPUT_CLASS}
              />
            </div>
          </div>
          <div>
            <label htmlFor="missedCallsPerDay" className="block text-sm text-ash">
              Approximate missed calls per day
            </label>
            <input
              id="missedCallsPerDay"
              name="missedCallsPerDay"
              type="text"
              inputMode="numeric"
              defaultValue={formValues.missedCallsPerDay}
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="bookingProcess" className="block text-sm text-ash">
              How do you currently handle booking?
            </label>
            <input
              id="bookingProcess"
              name="bookingProcess"
              type="text"
              defaultValue={formValues.bookingProcess}
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="challenge" className="block text-sm text-ash">
              Main business challenge
            </label>
            <input
              id="challenge"
              name="challenge"
              type="text"
              defaultValue={formValues.challenge}
              className={INPUT_CLASS}
            />
          </div>
          <fieldset>
            <legend className="text-sm text-ash">Preferred contact method</legend>
            <div className="mt-2 flex gap-6">
              {CONTACT_METHODS.map((method) => (
                <label key={method} className="flex items-center gap-2 text-ink">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    defaultChecked={
                      formValues.preferredContact
                        ? formValues.preferredContact === method
                        : method === "Phone"
                    }
                    className="accent-accent"
                  />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </details>

      <div>
        <label htmlFor="message" className="block text-sm text-ash">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={formValues.message}
          className="mt-2 w-full resize-none rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        />
      </div>

      <p className="text-xs text-ash/80">
        By submitting, you agree to be contacted about your inquiry. See our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Privacy Policy
        </a>
        .
      </p>

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
