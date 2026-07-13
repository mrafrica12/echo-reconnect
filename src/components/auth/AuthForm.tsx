"use client";

import { useState, type FormEvent } from "react";

const INPUT_CLASS =
  "mt-2 w-full rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

// TODO(backend): connect to real authentication once the API exists.
// This form is a visual-only stub for the frontend redesign pass.
export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-t border-line pt-8 text-center">
        <p className="font-display text-2xl text-ink">Not connected yet.</p>
        <p className="mt-2 text-ash">
          Sign-in isn&apos;t wired up in this preview.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {mode === "signup" && (
        <div>
          <label htmlFor="name" className="block text-sm text-ash">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={INPUT_CLASS}
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm text-ash">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={INPUT_CLASS}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm text-ash">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className={INPUT_CLASS}
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
      >
        {mode === "login" ? "Log in" : "Create account"}
      </button>
    </form>
  );
}
