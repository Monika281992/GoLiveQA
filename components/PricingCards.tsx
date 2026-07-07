"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Forever Free",
    price: "$0",
    unit: "/ forever",
    tagline: "For teams who want to organize their testing, on their own.",
    features: [
      "Unlimited test case generation (up to 10 flows)",
      "Shareable test plans",
      "30-minute QA strategy call",
      "No credit card required",
    ],
    cta: "Get started",
    ctaHref: "/book-a-call",
    highlighted: false,
  },
  {
    name: "One-Time Audit",
    price: "$399",
    unit: "/ per flow",
    tagline: "A single deep-dive to know exactly where your product stands.",
    features: [
      "Up to 5 core flows, fully tested",
      "Prioritized bug and risk report",
      "One-page executive summary",
      "Recorded walkthrough call",
      "Clear QA roadmap for next steps",
    ],
    cta: "Get started",
    ctaHref: "/book-a-call",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    tagline: "Full manual and automated testing, built around your release cycle.",
    features: [
      "Manual and automated testing every sprint",
      "API and CI/CD coverage in your pipeline",
      "Go/no-go sign-off before every release",
      "Results in your Slack automatically",
      "Dedicated senior QA engineer",
    ],
    cta: "Talk to sales",
    ctaHref: "/book-a-call",
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 18, height: 18, minWidth: 18, borderRadius: "50%", background: "#e9d8ce",
    }}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="#b5542d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  const [hovered, setHovered] = useState(false);
  const { highlighted } = plan;

  return (
    <div style={{
      background: highlighted ? "#fdf1ea" : "#fffdf9",
      border: highlighted ? "2px solid #b5542d" : "1.5px solid #e8e0d5",
      borderRadius: 20,
      padding: "40px 32px 36px",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      position: "relative",
      marginTop: highlighted ? -14 : 0,
      boxShadow: highlighted
        ? "0 18px 40px -18px rgba(181,84,45,0.4)"
        : "0 1px 3px rgba(33,26,21,0.05)",
    }}>
      {/* Most Popular badge */}
      {highlighted && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: "#b5542d", color: "#fffdf9",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", borderRadius: 20, padding: "4px 14px",
          fontFamily: "'Poppins', sans-serif", whiteSpace: "nowrap",
        }}>
          Most Popular
        </div>
      )}

      {/* Plan name */}
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
        textTransform: "uppercase", color: "#b5542d",
        fontFamily: "'Poppins', sans-serif", margin: "0 0 14px",
      }}>
        {plan.name}
      </p>

      {/* Price row */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
        <span style={{
          fontSize: 46, fontWeight: 700, color: "#211a15",
          letterSpacing: "-0.03em", fontFamily: "'Poppins', sans-serif", lineHeight: 1,
        }}>
          {plan.price}
        </span>
        {plan.unit && (
          <span style={{ fontSize: 14, color: "#948d80" }}>{plan.unit}</span>
        )}
      </div>

      {/* Tagline */}
      <p style={{ fontSize: 14.5, color: "#7a6f62", lineHeight: 1.6, margin: "0 0 20px" }}>
        {plan.tagline}
      </p>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #ece3d6", margin: "0 0 20px" }} />

      {/* Features */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 11 }}>
        {plan.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: "#3f382f" }}>
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA pinned to bottom */}
      <div style={{ marginTop: "auto" }}>
        <Link
          href={plan.ctaHref}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "block", textAlign: "center", padding: "13px 0",
            borderRadius: 11,
            fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.18s, color 0.18s",
            ...(highlighted
              ? {
                  background: hovered ? "#9c4526" : "#b5542d",
                  color: "#fffdf9",
                  border: "none",
                }
              : {
                  background: hovered ? "#fbeee7" : "transparent",
                  color: "#b5542d",
                  border: "1.5px solid #e0c6b8",
                }),
          }}
        >
          {plan.cta}
        </Link>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <section style={{ padding: "72px 32px 80px", background: "#f7f3ec" }}>
      {/* Header */}
      <div style={{ maxWidth: 760, margin: "0 auto 56px", textAlign: "center" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#b5542d",
          fontFamily: "'Poppins', sans-serif", margin: "0 0 14px",
        }}>Pricing</p>
        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          letterSpacing: "-0.02em",
          color: "#211a15",
          lineHeight: 1.15,
          margin: "0 0 16px",
        }}>
          Pay only for what you use
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 1.7vw, 1.13rem)",
          color: "#7a6f62",
          lineHeight: 1.65,
          margin: 0,
        }}>
          Plans for every user, organization, and use case.
        </p>
      </div>
      <div style={{
        maxWidth: 1060,
        margin: "0 auto",
      }}>
        {/* Grid */}
        <div className="pricing-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
          alignItems: "stretch",
        }}>
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
