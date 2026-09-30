import { SERVICES } from "@/data/services";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Echo Reconnects service";

// Mirrors the page's own generateStaticParams so every service card is
// prerendered rather than built on first request.
export function generateStaticParams() {
  return SERVICES.filter((s) => s.slug !== "ai-receptionist").map((s) => ({
    slug: s.slug,
  }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  return renderOgImage({
    eyebrow: "Service",
    title: service?.title ?? "Echo Reconnects",
  });
}
