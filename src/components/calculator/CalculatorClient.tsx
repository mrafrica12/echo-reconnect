"use client";

import { useMemo, useState } from "react";
import Slider from "./Slider";
import { useBookingModal } from "@/components/ghl/BookingModalContext";

const RECOVERY_RATE = 0.95;
const DAYS_PER_MONTH = 30;

const currency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function CalculatorClient() {
  const { open: openBookingModal } = useBookingModal();
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(20);
  const [avgDealValue, setAvgDealValue] = useState(500);
  const [closeRate, setCloseRate] = useState(20);

  const { monthlyLoss, annualLoss, annualRecovered } = useMemo(() => {
    const monthly =
      missedCallsPerDay * DAYS_PER_MONTH * avgDealValue * (closeRate / 100);
    const annual = monthly * 12;
    return {
      monthlyLoss: monthly,
      annualLoss: annual,
      annualRecovered: annual * RECOVERY_RATE,
    };
  }, [missedCallsPerDay, avgDealValue, closeRate]);

  return (
    <div className="container-copy px-6">
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

      <div className="mt-28 text-center">
        <p className="text-sm uppercase tracking-[0.14em] text-ash">
          Revenue at risk this year
        </p>
        <p className="mt-6 font-display font-semibold tabular-nums leading-none text-ink text-[clamp(2.75rem,11vw,7.5rem)]">
          {currency(annualLoss)}
        </p>
        <p className="mt-6 text-lg text-ash">
          {currency(monthlyLoss)} a month, gone to voicemail.
        </p>
      </div>

      <div className="mt-24 border-t border-line pt-16 text-center">
        <p className="text-ash">
          Echo Reconnect recovers up to 95% of that.
        </p>
        <p className="mt-4 font-display text-4xl font-semibold tabular-nums text-ink sm:text-5xl">
          {currency(annualRecovered)}
        </p>
        <p className="mt-2 text-ash">a year, back in your business.</p>

        <button
          type="button"
          onClick={() => openBookingModal("Calculator")}
          className="mt-10 inline-block rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
        >
          Get your free audit
        </button>
      </div>
    </div>
  );
}
