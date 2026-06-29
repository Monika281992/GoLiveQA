"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight } from "lucide-react";

export function Hero() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Enter your email to continue");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
    } catch {
      // proceed regardless
    }
    router.push(`/book-a-call?email=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section id="top" style={{ background: "#F8F4ED", padding: "96px 0 104px" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px", textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>

        {/* Eyebrow pill */}
        <span style={{
          display: "inline-flex",
          background: "#F4E3D6",
          color: "#B0532A",
          borderRadius: 999,
          padding: "6px 15px",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 26,
        }}>
          Senior QA, on demand
        </span>

        {/* H1 */}
        <h1 style={{
          fontSize: "clamp(44px, 8vw, 82px)",
          lineHeight: 1.0,
          fontWeight: 700,
          letterSpacing: "-0.035em",
          color: "#1C1814",
          margin: 0,
          fontFamily: "'Poppins', sans-serif",
        }}>
          Your QA Partner
        </h1>

        {/* Subhead */}
        <p style={{
          fontSize: 23,
          lineHeight: 1.45,
          fontWeight: 500,
          color: "#C05F32",
          margin: "24px auto 0",
          maxWidth: 620,
          fontFamily: "'Poppins', sans-serif",
        }}>
          Senior QA coverage so your team ships fast and breaks nothing.
        </p>

        {/* Form */}
        <div style={{ marginTop: 40 }}>
          <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="hero-email" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>
                Business email
              </label>
              <div id="hero-form-pill" style={{
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
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                    placeholder="Enter your email"
                    aria-invalid={!!error}
                    aria-describedby={error ? "hero-email-error" : undefined}
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
                    transition: "background 0.15s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#A54E27")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#C05F32")}
                >
                  {loading ? "Loading…" : "Book a Call"}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </div>
              {error && (
                <p id="hero-email-error" role="alert" style={{ color: "#C0392B", fontSize: 13, marginTop: 10, fontFamily: "'Poppins', sans-serif" }}>
                  {error}
                </p>
              )}
            </form>
        </div>

        {/* Trust line */}
        <p style={{ fontSize: 13.5, color: "#A89C8B", marginTop: 24, fontFamily: "'Poppins', sans-serif" }}>
          Trusted by founders shipping every week · No long-term lock-in
        </p>
      </div>

      {/* Responsive: stack button below input on small screens */}
      <style>{`
        @media (max-width: 480px) {
          #hero-form-pill {
            flex-direction: column !important;
            border-radius: 18px !important;
            padding: 14px 14px 10px !important;
            align-items: stretch !important;
          }
          #hero-form-pill button {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
