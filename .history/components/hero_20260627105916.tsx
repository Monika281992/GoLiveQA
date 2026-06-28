import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_46%_at_50%_-4%,#f6ebe5,transparent_72%)]" />
      <div className="relative mx-auto max-w-[840px] px-5 pb-12 pt-16 text-center sm:px-8 md:pb-16 md:pt-24 lg:px-12 lg:pt-[108px]">
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-[15px] text-muted">
          <span>✦ TRUSTED QA CONSULTANCY · 9 YEARS · 4 INDUSTRIES</span>
        </div>
        <h1 className="text-[clamp(2.5rem,7vw,4.1rem)] font-bold leading-[1.03] tracking-[-0.035em] text-ink">
          Your QA Partner
        </h1>
        <p className="mt-4 text-[clamp(1.1rem,2.5vw,1.45rem)] font-semibold text-accent">
          We deliver senior-level software testing for startups that ship fast — manual testing, Playwright automation, CI/CD integration, and real-time Slack reporting. 9 years of expertise. Zero compromises.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#contact">
              Book a Call
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#services">See Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
