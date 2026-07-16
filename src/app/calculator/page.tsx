import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CalculatorClient from "@/components/calculator/CalculatorClient";

export const metadata: Metadata = {
  title: "Calculator",
  description:
    "Calculate how much revenue your business is losing to missed calls, and see what Echo Reconnect could recover for you in Atlanta, GA.",
};

export default function CalculatorPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <Reveal>
        <div className="container-copy text-center">
          <p className="text-sm uppercase tracking-[0.14em] text-ash">
            Revenue calculator
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            What is a missed call really costing you?
          </h1>
        </div>
      </Reveal>

      <div className="mt-24">
        <Reveal>
          <CalculatorClient />
        </Reveal>
      </div>
    </section>
  );
}
