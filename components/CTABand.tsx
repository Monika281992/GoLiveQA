"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight } from "lucide-react";

export default function CTABand() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) { setError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed }),
    }).catch(() => {});
    router.push(`/book-a-call?email=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #efe6d5 0%, #e9dec9 100%)",
        padding: "96px 32px 104px",
        textAlign: "center",
      }}
      className="!py-16 !px-5 md:!py-24 md:!px-8"
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#1c1a16", letterSpacing: "-0.025em", margin: "0 0 14px", lineHeight: 1.2 }}>
          Ready to find out what&apos;s really broken?
        </h2>
        <p style={{ fontSize: 16, color: "#6f695e", lineHeight: 1.65, margin: "0 0 36px" }}>
          Tell us about your product and we&apos;ll scope the audit for you.
        </p>

        <form onSubmit={handleSubmit} noValidate>
            <div
              style={{
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
              }}
            >
              <Mail size={18} color="#B7AC9B" style={{ flexShrink: 0 }} />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                placeholder="Enter your email"
                aria-label="Email address"
                aria-invalid={!!error}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 15,
                  color: "#1C1814",
                  background: "transparent",
                  minWidth: 0,
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#C05F32",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "12px 22px",
                  fontSize: 14.5,
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Book Your Audit <ArrowRight size={16} />
              </button>
            </div>
            {error && (
              <p style={{ marginTop: 10, fontSize: 13, color: "#C0392B" }}>{error}</p>
            )}
          </form>
      </div>
    </section>
  );
}
