"use client";

import { useId } from "react";

export default function Slider({
  label,
  value,
  displayValue,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-ash">{label}</label>
        <span className="font-display text-2xl tabular-nums text-ink">
          {displayValue}
        </span>
      </div>
      <input
        id={id}
        type="range"
        className="range-brand mt-5"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--flare) ${percent}%, var(--accent) ${percent}%)`,
        }}
        aria-valuetext={displayValue}
      />
    </div>
  );
}
