"use client";

import { useMemo, useState } from "react";
import Slider from "./Slider";
import BookingCta from "@/components/ghl/BookingCta";

const DAYS_PER_MONTH = 30;

const currency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function CalculatorClient() {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(20);
  const [avgDealValue, setAvgDealValue] = useState(500);
  const [closeRate, setCloseRate] = useState(20);
  // Editable illustrative assumption, not a guaranteed recovery rate.
  const [recoveryRate, setRecoveryRate] = useState(80);

  const { monthlyLoss, annualLoss, annualRecovered } = useMemo(() => {
    const monthly =
      missedCallsPerDay * DAYS_PER_MONTH * avgDealValue * (closeRate / 100);
    const annual = monthly * 12;
    return {
      monthlyLoss: monthly,
      annualLoss: annual,
      annualRecovered: annual * (recoveryRate / 100),
    };
  }, [missedCallsPerDay, avgDealValue, closeRate, recoveryRate]);

  return (
    <div className="container-wide max-w-3xl">
      <div className="flex flex-col gap-14">
        <Slider
          label="Missed calls per day"
          value={missedCallsPerDay}
          displayValue={`${missedCallsPerDay}`}
          min={1}
          max={100}
          onChange={setMissedCallsPerDay}
        />
        <Slider
          label="Average deal value"
          value={avgDealValue}
          displayValue={currency(avgDealValue)}
          min={100}
          max={2000}
          step={50}
          onChange={setAvgDealValue}
        />
        <Slider
          label="Close rate"
          value={closeRate}
          displayValue={`${closeRate}%`}
          min={5}
          max={50}
          onChange={setCloseRate}
        />
      </div>

      <p className="mt-10 max-w-md text-sm text-ash">
        Formula: missed calls per day × {DAYS_PER_MONTH} days × average deal
        value × close rate. All four assumptions above are yours to edit.
      </p>

      <div className="mt-16 text-center" aria-live="polite">
        <p className="eyebrow">Revenue at risk this year</p>
        {/* Money at risk carries the warm accent; money recovered below
            stays navy, so the two figures read as opposites at a glance. */}
        <p className="mt-6 font-display font-bold tabular-nums leading-none text-flare-ink text-[clamp(2.75rem,11vw,7.5rem)]">
          {currency(annualLoss)}
        </p>
        <p className="mt-6 text-lg text-ash">
          {currency(monthlyLoss)} a month, gone to voicemail.
        </p>
      </div>

      <div className="mt-24 border-t border-line pt-16 text-center">
        <div className="mx-auto max-w-sm text-left">
          <Slider
            label="If you recovered this share of that opportunity"
            value={recoveryRate}
            displayValue={`${recoveryRate}%`}
            min={10}
            max={100}
            step={5}
            onChange={setRecoveryRate}
          />
        </div>
        <p className="mt-10 font-display text-4xl font-bold tabular-nums text-accent sm:text-5xl">
          {currency(annualRecovered)}
        </p>
        <p className="mt-2 text-ash">a year, back in your business.</p>
        <p className="mx-auto mt-6 max-w-sm text-sm text-ash/70">
          This calculator provides an illustrative estimate and does not
          guarantee business results. Actual recovery depends on call volume,
          average customer value, close rate, response time, and how the
          workflow is configured.
        </p>

        <BookingCta
          source="Calculator"
          className="mt-10 btn-primary"
        >
          Talk with Echo Reconnects about your numbers
        </BookingCta>
      </div>
    </div>
  );
}
