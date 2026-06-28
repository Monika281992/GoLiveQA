"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleBook(e: React.MouseEvent) {
    const trimmed = email.trim();
    if (!trimmed) {
      e.preventDefault();
      setError("Please enter your email address.");
      return;
    }
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      e.preventDefault();
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
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
          <div className={`flex items-center overflow-hidden rounded-full border bg-surface shadow-sm transition-colors ${error ? "border-red-400" : "border-hairline"}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
              placeholder="Enter your business email"
              className="flex-1 bg-transparent px-6 py-3.5 text-[15px] text-body outline-none placeholder:text-muted"
            />
            <a
              href="#contact"
              onClick={handleBook}
              className="m-1.5 flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-white"
            >
              Book a Call
              <ArrowRight className="h-[16px] w-[16px]" />
            </a>
          </div>
          {error && (
            <p className="mt-2 text-[13px] text-red-500">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
