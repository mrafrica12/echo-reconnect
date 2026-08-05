import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "About Echo Reconnects";

export default function OpengraphImage() {
  return renderOgImage({ eyebrow: "About", title: "Why we built Echo Reconnects." });
}
