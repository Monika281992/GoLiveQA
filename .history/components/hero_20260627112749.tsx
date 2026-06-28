"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleBook() {
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");
    router.push(`/book-a-call?email=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_46%_at_50%_-4%,#f6ebe5,transparent_72%)]" />
      <div className="relative mx-auto max-w-[840px] px-5 pb-12 pt-16 text-center sm:px-8 md:pb-16 md:pt-24 lg:px-12 lg:pt-[108px]">
        <h1 className="text-[clamp(2.5rem,7vw,4.1rem)] font-bold leading-[1.03] tracking-[-0.035em] text-ink">
          Your QA Partner
        </h1>
        <p className="mt-4 text-[clamp(1.1rem,2.5vw,1.45rem)] font-semibold text-accent">
          Startups ship faster and break less with GoLiveQA. Senior QA coverage across manual testing, automation, CI/CD, and real-time reporting.
        </p>
        <div className="mt-8 mx-auto max-w-[480px]">
          {status === "success" ? (
            <p className="rounded-full border border-green-200 bg-green-50 px-6 py-4 text-[15px] font-medium text-green-700">
              ✓ We&apos;ll be in touch soon!
            </p>
          ) : (
            <>
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
                  {status === "loading" ? "Sending…" : "Book a Call"}
                  {status !== "loading" && <ArrowRight className="h-[16px] w-[16px]" />}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-[13px] text-red-500">{error}</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
