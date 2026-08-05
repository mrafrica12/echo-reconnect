import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import CalculatorClient from "@/components/calculator/CalculatorClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Missed Call Revenue Calculator",
  description:
    "Calculate how much revenue your business is losing to missed calls, and see what Echo Reconnects could recover for you in Atlanta, GA.",
  path: "/calculator",
});

const breadcrumb = breadcrumbJsonLd([{ name: "Calculator", path: "/calculator" }]);

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHeader
        eyebrow="Revenue calculator"
        title="What is a missed call"
        accent="really costing you?"
        description="Move the sliders to your own numbers. Nothing is sent anywhere — the estimate is calculated in your browser."
      />

      <section className="px-6 pb-28 pt-20 lg:px-10 lg:pb-36">
        <Reveal>
          <CalculatorClient />
        </Reveal>
      </section>
      <CtaBand source="Calculator Page" />
    </>
  );
}
