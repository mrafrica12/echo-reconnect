import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0B0B0C",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            color: "#FAF9F6",
            marginBottom: 24,
          }}
        >
          Echo Reconnect
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#FAF9F6",
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          Never miss another call.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#D97A2B",
            marginTop: 36,
          }}
        >
          echoreconnect.com
        </div>
      </div>
    ),
    { ...size }
  );
}
