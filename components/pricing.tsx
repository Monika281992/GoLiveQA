"use client";

import { useEffect, useState } from "react";
import { Calendar, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  "No surprise charges",
  "No long-term lock-in",
  "Senior engineer, always",
];

export function Pricing() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  useEffect(() => {
    if (!isSchedulerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSchedulerOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isSchedulerOpen]);

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-[108px]" style={{ background: "#fffdf9" }}>
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[740px] overflow-hidden rounded-[26px] border border-hairline bg-white px-6 py-10 text-center shadow-cta sm:px-14 md:py-[68px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,#f6ebe5,transparent_70%)]" />
          <div className="relative">
            <h2 className="text-[clamp(2rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink">
              Let&apos;s Talk About Your Product
            </h2>
            <p className="mx-auto mt-[18px] max-w-[560px] text-[clamp(1rem,1.7vw,1.13rem)] leading-relaxed text-muted">
              Every engagement is scoped to your product size, release frequency, and
              testing needs. Book a 30-minute call — I&apos;ll give you a clear, honest
              quote within 24 hours.
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={() => setIsSchedulerOpen(true)}>
                <Calendar className="h-[19px] w-[19px]" />
                Book a 30 min slot
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-[26px] gap-y-3 text-sm text-body">
              {guarantees.map((g) => (
                <span key={g} className="inline-flex items-center gap-2">
                  <Check className="h-[17px] w-[17px] text-green-600" />
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isSchedulerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsSchedulerOpen(false)}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSchedulerOpen(false)}
              aria-label="Close scheduler"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-md hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src="https://cal.id/monika-chaudhary"
              title="Book a 30 min slot"
              className="h-full w-full flex-1 border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
