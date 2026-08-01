"use client";

import Link from "next/link";
import { useState } from "react";

const AVG_DEAL_VALUE = 500;
const CLOSE_RATE = 0.2;
const DAYS_PER_MONTH = 30;

export default function CalculatorTeaser() {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(20);

  const monthlyLoss =
    missedCallsPerDay * DAYS_PER_MONTH * AVG_DEAL_VALUE * CLOSE_RATE;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(monthlyLoss);

  return (
    <div className="container-copy px-6 text-center">
      <label htmlFor="missed-calls" className="block text-sm text-ash">
        Missed calls per day
      </label>
      <input
        id="missed-calls"
        type="range"
        min={1}
        max={60}
        value={missedCallsPerDay}
        onChange={(e) => setMissedCallsPerDay(Number(e.target.value))}
        className="mt-4 w-full accent-accent"
        aria-valuetext={`${missedCallsPerDay} missed calls per day`}
      />
      <div className="mt-2 text-sm text-ash">{missedCallsPerDay} a day</div>

      <p className="mt-10 font-display text-6xl font-semibold tabular-nums text-ink sm:text-7xl">
        {formatted}
      </p>
      <p className="mt-3 text-ash">lost every month, at a 20% close rate.</p>
      <p className="mt-2 text-sm text-ash/70">
        Illustrative estimate based on the values shown. Actual results vary.
      </p>

      <Link
        href="/calculator"
        className="mt-8 inline-block border-b border-ink text-ink transition-colors hover:border-accent hover:text-accent"
      >
        Calculate your exact number
      </Link>
    </div>
  );
}
