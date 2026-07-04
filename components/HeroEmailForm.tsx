"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight } from "lucide-react";

interface HeroEmailFormProps {
  buttonLabel?: string;
}

export default function HeroEmailForm({ buttonLabel = "Book a Call" }: HeroEmailFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) { setError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setError("Please enter a valid email address."); return; }
    setError("");
    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed }),
    }).catch(() => {});
    router.push(`/book-a-call?email=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#fff",
        border: `1px solid ${error ? "#C0392B" : "#E7DFD0"}`,
        borderRadius: 999, padding: "7px 7px 7px 18px",
        boxShadow: "0 1px 4px rgba(0,0,0,.06)",
        maxWidth: 470, margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
          <Mail size={18} color="#B7AC9B" style={{ flexShrink: 0 }} />
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
            placeholder="Enter your email"
            aria-label="Business email"
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              fontSize: 15, color: "#1C1814", fontFamily: "'Poppins', sans-serif", minWidth: 0,
            }}
          />
        </div>
        <button type="submit" style={{
          background: "#C05F32", color: "#fff", border: "none", borderRadius: 999,
          padding: "12px 22px", fontSize: 14.5, fontWeight: 600, whiteSpace: "nowrap",
          cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
          fontFamily: "'Poppins', sans-serif",
        }}>
          {buttonLabel} <ArrowRight size={16} />
        </button>
      </div>
      {error && (
        <p style={{ color: "#C0392B", fontSize: 13, marginTop: 10, fontFamily: "'Poppins', sans-serif" }}>
          {error}
        </p>
      )}
    </form>
  );
}
