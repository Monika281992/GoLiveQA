"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const dimensions = [
  {
    title: "Functional coverage",
    tag: "Core flows, manually tested",
    desc: "We manually walk every core user journey end to end, the way a real user would — then break it on purpose.",
    checks: ["Sign-up, login & account recovery", "Checkout and conversion flows", "Primary create/read/update/delete paths", "Empty, loading & error states"],
  },
  {
    title: "UI/UX testing",
    tag: "Usability, visual, accessibility",
    desc: "We test your product the way real users experience it — checking that it looks right, feels right, and works for everyone.",
    checks: ["Visual consistency & spacing", "Form feedback & error messages", "Accessibility & keyboard navigation", "Copy clarity & confusing interactions"],
  },
  {
    title: "Cross-platform",
    tag: "Browsers, devices, screens",
    desc: "Your product tested across the browsers and devices your customers actually use, not just the one on your desk.",
    checks: ["Chrome, Safari, Firefox & Edge", "iOS and Android handsets", "Responsive breakpoints & layout shift", "Touch, keyboard & pointer input"],
  },
  {
    title: "API & backend",
    tag: "Endpoints, auth, edge cases",
    desc: "Every endpoint probed for the failure modes that never show up on the happy path.",
    checks: ["Status codes & error contracts", "Auth, sessions & token expiry", "Validation & malformed payloads", "Pagination, rate limits & timeouts"],
  },
  {
    title: "Performance",
    tag: "Load signals, bottlenecks",
    desc: "We surface the slow paths and resource leaks that quietly erode the experience under real load.",
    checks: ["TTFB & core web vitals", "Bundle size & render-blocking assets", "Slow queries & N+1 patterns", "Memory growth & leaks"],
  },
  {
    title: "Security basics",
    tag: "Auth, input, data handling",
    desc: "The foundational checks that catch the most common ways products get compromised.",
    checks: ["XSS, CSRF & injection vectors", "Access control & IDOR", "Secrets & config exposure", "PII handling & data at rest"],
  },
];

export default function WhatWeAudit() {
  const [activeTab, setActiveTab] = useState(0);
  const panel = dimensions[activeTab];

  return (
    <section style={{ background: "#faf6ef", padding: "96px 32px" }}>
      <style>{`
        @keyframes wwa-fade { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width:639px) { .wwa-checks { grid-template-columns: 1fr !important; } }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Eyebrow */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.16em", color: "#c0552f", margin: "0 0 12px", textAlign: "center" }}>
          What we audit
        </p>

        {/* H2 */}
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 36px)", color: "#16233c", letterSpacing: "-0.02em", margin: "0 0 44px", lineHeight: 1.15, textAlign: "center" }}>
          Six dimensions, tested by hand
        </h2>

        {/* Tab strip */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28, justifyContent: "center" }}>
          {dimensions.map((d, i) => (
            <button
              key={d.title}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "11px 20px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                border: `1px solid ${i === activeTab ? "#c0552f" : "#ece1d0"}`,
                background: i === activeTab ? "#c0552f" : "#fff",
                color: i === activeTab ? "#fff" : "#16233c",
                cursor: "pointer",
                transition: "all .18s",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {d.title}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          key={activeTab}
          style={{
            background: "#fff",
            border: "1px solid #ece1d0",
            borderRadius: 18,
            boxShadow: "0 1px 4px rgba(0,0,0,.04)",
            padding: "36px 38px",
            textAlign: "left",
            animation: "wwa-fade .2s ease",
          }}
        >
          {/* Tag */}
          <p style={{ fontFamily: "'Poppins', sans-serif", color: "#c0552f", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>
            {panel.tag}
          </p>

          {/* Title */}
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, fontWeight: 700, color: "#16233c", letterSpacing: "-0.02em", margin: "0 0 14px", lineHeight: 1.2 }}>
            {panel.title}
          </h3>

          {/* Description */}
          <p style={{ fontSize: 15, color: "#6f6557", lineHeight: 1.6, maxWidth: 640, margin: "0 0 28px" }}>
            {panel.desc}
          </p>

          {/* Checks */}
          <div
            className="wwa-checks"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 32px" }}
          >
            {panel.checks.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Check size={15} color="#c0552f" strokeWidth={2.5} style={{ marginTop: 3, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "#6f6557", lineHeight: 1.55 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

