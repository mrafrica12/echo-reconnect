import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Echo Reconnects — Marketing that keeps you connected.";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Social media marketing",
    title: "Marketing that keeps you connected.",
  });
}
