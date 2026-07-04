"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight } from "lucide-react";

export function CTAEmailCapture({ heading, subtext }: { heading: string; subtext: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleBook() {
    const trimmed = email.trim();
    if (!trimmed) { setError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setError("Please enter a valid email address."); return; }
    setError("");
    setStatus("loading");
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
    } catch { /* proceed regardless */ }
    router.push(`/book-a-call?email=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section style={{ background: "#F8F4ED", padding: "80px 0 88px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 36px", textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#1C1814", margin: 0 }}>
          {heading}
        </h2>
        <p style={{ marginTop: 12, fontSize: 16, color: "#7a6f62", lineHeight: 1.6 }}>{subtext}</p>

        <form
          onSubmit={(e) => { e.preventDefault(); handleBook(); }}
          noValidate
          style={{ marginTop: 32 }}
        >
          <label htmlFor="cta-email" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>
            Business email
          </label>
          <div id="cta-form-pill" style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            border: `1px solid ${error ? "#C0392B" : "#E7DFD0"}`,
            borderRadius: 999,
            padding: "7px 7px 7px 18px",
            boxShadow: "0 1px 4px rgba(0,0,0,.06)",
            maxWidth: 470,
            margin: "0 auto",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
              <Mail size={18} color="#B7AC9B" style={{ flexShrink: 0 }} />
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                placeholder="Enter your email"
                aria-invalid={!!error}
                aria-describedby={error ? "cta-email-error" : undefined}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: 15,
                  color: "#1C1814",
                  fontFamily: "'Poppins', sans-serif",
                  minWidth: 0,
                }}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: "#C05F32",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "12px 22px",
                fontSize: 14.5,
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Poppins', sans-serif",
                opacity: status === "loading" ? 0.7 : 1,
                transition: "background 0.15s",
              }}
              onMouseOver={(e) => { if (status !== "loading") e.currentTarget.style.background = "#A54E27"; }}
              onMouseOut={(e) => (e.currentTarget.style.background = "#C05F32")}
            >
              {status === "loading" ? "Loading…" : "Book a Call"}
              {status !== "loading" && <ArrowRight size={16} />}
            </button>
          </div>
          {error && (
            <p id="cta-email-error" role="alert" style={{ color: "#C0392B", fontSize: 13, marginTop: 10, fontFamily: "'Poppins', sans-serif" }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
