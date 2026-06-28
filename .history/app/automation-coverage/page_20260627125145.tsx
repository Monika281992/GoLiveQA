import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Automation Coverage — GoLiveQA",
  description: "High-performance test automation frameworks for dependable, fast releases.",
};

const highlights = [
  "Playwright & Cypress frameworks built from scratch",
  "CI/CD pipeline integration on every commit",
  "Regression suite reduced from 1 day to under 1 hour",
  "Parallel test execution for faster feedback",
  "Flake detection and auto-retry strategies",
  "Real-time Slack reporting after every run",
];

export default function AutomationCoveragePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-[108px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_46%_at_50%_-4%,#f6ebe5,transparent_72%)]" />
          <div className="relative mx-auto max-w-[760px] px-5 text-center sm:px-8 lg:px-12">
            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">
              Automation Coverage
            </h1>
            <p className="mx-auto mt-5 max-w-[580px] text-[1.1rem] leading-relaxed text-muted">
              Establish consistent, high-performance automation frameworks for dependable releases — built and maintained by senior QA engineers.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="/book-a-call">
                  Book a Call <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="border-t border-hairline bg-surface-soft py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
                What&apos;s Included
              </h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                End-to-end automation setup — from framework to pipeline to reporting.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[14px] border border-hairline bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  <p className="text-[15px] font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 text-center sm:px-8 lg:px-12">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
              Ready to automate your testing?
            </h2>
            <p className="mt-3 text-[1rem] text-muted">
              Tell us about your stack and we&apos;ll design the right automation strategy.
            </p>
            <Button asChild size="lg" className="mt-7">
              <a href="/book-a-call">
                Book a Consultation <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
