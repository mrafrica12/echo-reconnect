"use client";

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
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-ash">{label}</label>
        <span className="font-display text-2xl tabular-nums text-ink">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        className="range-thin mt-4"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--accent) ${percent}%, var(--line) ${percent}%)`,
        }}
        aria-valuetext={displayValue}
      />
    </div>
  );
}
