import { ImageResponse } from "next/og";
import { company } from "@/lib/content/company";

export const dynamic = "force-static";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1B365D",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(255,106,61,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: "#FF6A3D",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              ALFA
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.3em",
              }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 54,
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          {company.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 24,
            color: "#FF6A3D",
            fontWeight: 600,
          }}
        >
          {`${company.serviceArea} · Authorized Dell, Lenovo, HP & Microsoft Partner`}
        </div>
      </div>
    ),
    { ...size }
  );
}
