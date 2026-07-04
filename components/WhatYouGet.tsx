import { ClipboardList, FileText, CirclePlay, Route } from "lucide-react";

const deliverables = [
  {
    Icon: ClipboardList,
    title: "Prioritized bug & risk report",
    desc: "Every finding tagged P0–P3 with exact reproduction steps. Your developers can start fixing the moment they read it.",
  },
  {
    Icon: FileText,
    title: "One-page executive summary",
    desc: "The full picture — in plain language — for founders, investors, or anyone who doesn't need the technical details.",
  },
  {
    Icon: CirclePlay,
    title: "Recorded walkthrough call",
    desc: "A live call where we walk through every finding together — recorded and yours to keep.",
  },
  {
    Icon: Route,
    title: "A clear QA roadmap",
    desc: "Not just what's broken — what to fix first, what can wait, and what to automate next.",
  },
];

export default function WhatYouGet() {
  return (
    <section style={{ background: "#faf6ef", padding: "96px 32px" }}>
      <style>{`
        @media (max-width:639px) { .wyg-grid { grid-template-columns: 1fr !important; } }
        .wyg-card { transition: transform .2s, box-shadow .2s; }
        .wyg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(45,33,20,.10) !important; }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Eyebrow */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.16em", color: "#c0552f", margin: "0 0 12px", textAlign: "center" }}>
          What you get
        </p>

        {/* H2 */}
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 36px)", color: "#16233c", letterSpacing: "-0.02em", margin: "0 0 48px", lineHeight: 1.15, textAlign: "center" }}>
          A report you can actually act on.
        </h2>

        {/* 2×2 grid */}
        <div
          className="wyg-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {deliverables.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="wyg-card"
              style={{
                background: "#fff",
                border: "1px solid #ece1d0",
                borderRadius: 18,
                padding: 34,
                boxShadow: "0 1px 4px rgba(0,0,0,.04)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {/* Icon chip */}
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: "#f7e7db",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={24} color="#c0552f" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, fontWeight: 700, color: "#16233c", margin: "0 0 8px", lineHeight: 1.2 }}>
                  {title}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6f6557", margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

