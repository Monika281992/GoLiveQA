"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How many flows are covered in the audit?",
    a: "Up to 5 core user flows — you choose which ones matter most (like signup, checkout, or your main dashboard). There's no cap on test cases within those 5 flows — each one is tested as thoroughly as it needs to be, covering the happy path, edge cases, and failure scenarios in full. Need more than 5 flows? You can add flows anytime, priced into the same quote.",
  },
  {
    q: "What counts as one \"flow\"?",
    a: "A flow is a complete user journey through your product — like signing up, checking out, or resetting a password — tested end-to-end. Each flow typically includes 15–20+ individual test cases covering the happy path, edge cases, validation errors, and failure scenarios, not just a single click-through. For example, a \"Sign Up\" flow includes testing valid and invalid inputs, duplicate emails, password rules, verification links, social login, mobile responsiveness, and more — all under that one flow.",
  },
  {
    q: "How long does the audit take?",
    a: "Depends on the scope — but typically about a month. It can finish earlier if only a few features need testing. We agree on a delivery date upfront so there are no surprises.",
  },
  {
    q: "What do you need from us?",
    a: "Access to a staging environment, a short walkthrough of your core flows, and any existing docs or known issues. That is it.",
  },
  {
    q: "Is this really a one-time engagement?",
    a: "Yes. One flat scope, one deliverable, no retainer and no ongoing commitment. You can always book another later.",
  },
  {
    q: "What happens if you find critical bugs?",
    a: "Critical issues are flagged P0 in the report with clear reproduction steps and a suggested fix, so your team can act immediately.",
  },
  {
    q: "Who actually runs the audit?",
    a: "A senior QA engineer works on your product by hand. You are not paying for an automated scanner or a junior checklist run.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number[]>([0]);

  function toggle(i: number) {
    setOpen((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  }

  return (
    <section style={{ background: "#f7f3ec", padding: "88px 32px" }}
      className="!py-16 !px-5 md:!py-24 md:!px-8">
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#1c1a16", letterSpacing: "-0.025em", margin: "0 0 40px", lineHeight: 1.2, textAlign: "center" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              style={{
                background: "#fffdf9",
                border: "1px solid #e6ddcd",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,.04)",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: "#1c1a16", lineHeight: 1.4 }}>
                  {q}
                </span>
                <ChevronDown
                  size={18}
                  color="#948d80"
                  style={{
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: open.includes(i) ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open.includes(i) && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p style={{ fontSize: 14.5, color: "#6f695e", lineHeight: 1.7, margin: 0 }}>
                    {a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
