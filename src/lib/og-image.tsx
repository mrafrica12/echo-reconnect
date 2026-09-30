import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared social card. Every route renders the same layout with its own
 * eyebrow and headline, so a link to a service page no longer previews as
 * the generic homepage card.
 *
 * Colours are hard-coded rather than read from CSS custom properties —
 * this runs in the OG renderer, which has no stylesheet.
 */
export function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #081A33 0%, #12345F 55%, #1C4A80 100%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8FB6E8",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 74 : 90,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginTop: 28,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#FFFFFF" }}>
            Echo Reconnects
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 44,
                height: 6,
                borderRadius: 999,
                background: "#F2801E",
                marginRight: 20,
              }}
            />
            <div style={{ display: "flex", fontSize: 26, color: "#8FB6E8" }}>
              echoreconnects.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
