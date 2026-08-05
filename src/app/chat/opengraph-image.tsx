import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Echo Reconnects AI chat";

export default function OpengraphImage() {
  return renderOgImage({ eyebrow: "AI chat", title: "Ask our AI assistant." });
}
