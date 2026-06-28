"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[680px] px-5 text-center sm:px-8">
        <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
          {heading}
        </h2>
        <p className="mt-3 text-[1rem] text-muted">{subtext}</p>
        <div className="mx-auto mt-8 max-w-[480px]">
          <div className={`flex items-center overflow-hidden rounded-full border bg-surface shadow-sm transition-colors ${error ? "border-red-400" : "border-hairline"}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
              placeholder="Enter your business email"
              className="flex-1 bg-transparent px-6 py-3.5 text-[15px] text-body outline-none placeholder:text-muted"
            />
            <button
              type="button"
              onClick={handleBook}
              disabled={status === "loading"}
              className="m-1.5 flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white disabled:opacity-70"
            >
              {status === "loading" ? "Loading…" : "Book a Call"}
              {status !== "loading" && <ArrowRight className="h-[16px] w-[16px]" />}
            </button>
          </div>
          {error && <p className="mt-2 text-[13px] text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}
