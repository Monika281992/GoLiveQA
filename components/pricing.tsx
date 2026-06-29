import { Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  "No surprise charges",
  "No long-term lock-in",
  "Senior engineer, always",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-[108px]">
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
              <Button asChild size="lg">
                <a href="/book-a-call">
                  <Calendar className="h-[19px] w-[19px]" />
                  Book a 30-min Call
                </a>
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
    </section>
  );
}
