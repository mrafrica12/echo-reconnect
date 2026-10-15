import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Missed call revenue calculator";

export default function OpengraphImage() {
  return renderOgImage({ eyebrow: "Revenue calculator", title: "What is a missed call really costing you?" });
}
