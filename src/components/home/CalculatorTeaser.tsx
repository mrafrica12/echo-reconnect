"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/EchoIcons";
import { track } from "@/lib/analytics";

const AVG_DEAL_VALUE = 500;
const CLOSE_RATE = 0.2;
const DAYS_PER_MONTH = 30;
const MIN_CALLS = 1;
const MAX_CALLS = 60;

export default function CalculatorTeaser() {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(20);
  // Dragging fires change on every step; only the first one is a signal.
  const engagementReported = useRef(false);

  const monthlyLoss =
    missedCallsPerDay * DAYS_PER_MONTH * AVG_DEAL_VALUE * CLOSE_RATE;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(monthlyLoss);

  const percent =
    ((missedCallsPerDay - MIN_CALLS) / (MAX_CALLS - MIN_CALLS)) * 100;

  return (
    <div className="text-center">
      <div className="mx-auto max-w-md">
        <label htmlFor="missed-calls" className="block text-ash">
          Missed calls per day
        </label>
        <input
          id="missed-calls"
          type="range"
          min={MIN_CALLS}
          max={MAX_CALLS}
          value={missedCallsPerDay}
          onChange={(e) => {
            if (!engagementReported.current) {
              engagementReported.current = true;
              track("calculator_engaged", { placement: "Homepage teaser" });
            }
            setMissedCallsPerDay(Number(e.target.value));
          }}
          className="range-brand mt-5"
          style={{
            background: `linear-gradient(to right, var(--flare) ${percent}%, var(--accent) ${percent}%)`,
          }}
          aria-valuetext={`${missedCallsPerDay} missed calls per day`}
        />
        <div className="mt-4 text-ash">{missedCallsPerDay} a day</div>
      </div>

      <p className="mt-10 font-display text-5xl font-bold tabular-nums tracking-tight text-flare-ink sm:text-6xl">
        {formatted}
      </p>
      <p className="mt-3 text-ash">lost every month, at a 20% close rate.</p>
      <p className="mt-2 text-sm text-ash/70">
        Illustrative estimate based on the values shown. Actual results vary.
      </p>

      <Link href="/calculator" className="btn-ghost mt-8">
        Calculate your exact number
        <span className="chip">
          <ArrowRightIcon width={14} height={14} />
        </span>
      </Link>
    </div>
  );
}
