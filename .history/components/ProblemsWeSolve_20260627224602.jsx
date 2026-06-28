"use client";

import { X, Check } from "lucide-react";

const withoutItems = [
  "Developers testing their own code",
  "Too expensive to hire full-time QA",
  "Delayed releases from last-minute bugs",
  "Vague bug reports bounce between QA and dev",
  "No regression process in place",
  "No production monitoring after go-live",
];

const withItems = [
  "Independent QA eye on every feature",
  "A fraction of a full-time hire's cost",
  "Shift-left — we test alongside your sprints, so releases ship on time",
  "Detailed tickets with videos, logs and screenshots",
  "We automate stable flows — regression runs in minutes",
  "We monitor production continuously, long after launch",
];

export function ProblemsWeSolve() {
  return (
    <section
      style={{
        background: "#faf5ec",
        padding: "clamp(56px, 8vw, 96px) clamp(20px, 5vw, 32px)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ maxWidth: 660, margin: "0 auto 56px", textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              background: "#f4e3d6",
              color: "#c0552f",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              borderRadius: 999,
              padding: "5px 14px",
              marginBottom: 20,
            }}
          >
            What problems we solve
          </span>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 5vw, 40px)",
              color: "#211a15",
              margin: "0 0 16px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Same product. Without us, and with us.
          </h2>
          <p style={{ fontSize: 16, color: "#7a6f62", lineHeight: 1.6, margin: 0 }}>
            Every line on the left is something we hear from founders every week.
            Every line on the right is what changes once GoLiveQA owns your quality.
          </p>
        </div>

        {/* Ledger */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 12px 34px rgba(45,33,20,.10)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="ledger-grid"
        >
          {/* Without column */}
          <div style={{ background: "#fff", padding: 44 }}>
            {/* Column header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#efe7da",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <X size={18} color="#a89a87" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#211a15",
                }}
              >
                Without senior QA
              </span>
            </div>

            {/* Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {withoutItems.map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <X
                    size={17}
                    color="#c2b6a4"
                    strokeWidth={2.5}
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  <span
                    style={{
                      fontSize: 15,
                      color: "#9a8f80",
                      lineHeight: 1.55,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* With column */}
          <div style={{ background: "#2c2620", padding: 44 }}>
            {/* Column header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#c0552f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Check size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#f3ede4",
                }}
              >
                With GoLiveQA
              </span>
            </div>

            {/* Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {withItems.map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <Check
                    size={17}
                    color="#f0a07e"
                    strokeWidth={2.5}
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#f3ede4",
                      lineHeight: 1.55,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive: stack columns on small screens */}
      <style>{`
        @media (max-width: 700px) {
          .ledger-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
