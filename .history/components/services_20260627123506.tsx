import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: "⚙️",
    title: "Quality Engineering",
    desc: "Deliver resilient, scalable software through enterprise-grade quality engineering.",
  },
  {
    icon: "🤖",
    title: "Test Automation",
    desc: "Establish consistent, high-performance automation frameworks for dependable releases.",
  },
  {
    icon: "🔍",
    title: "Manual Testing",
    desc: "Identify and resolve complex user experience issues with expert-led manual validation.",
  },
];

const engagementModels = [
  { title: "Managed QA", desc: "Full ownership of your QA function." },
  { title: "QA Engineers for Hire", desc: "Flexible QA capacity when you need it." },
  { title: "Dedicated QA Teams", desc: "Embedded teams aligned with your roadmap." },
];

const focusAreas = [
  "Web App Testing",
  "Mobile App Testing",
  "API Testing",
  "Dashboard Testing",
  "Cross-Platform Testing",
];

const testingCoverage = [
  "Regression Testing",
  "Functional Testing",
  "Integration Testing",
  "End-to-End Testing",
  "Performance Testing",
  "Compatibility Testing",
  "Security Testing",
];

const frameworks = ["Playwright", "Cypress", "Selenium", "Appium", "Postman", "k6"];

const colLabel = "mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-muted";
const colLink = "block py-1 text-[14px] text-body transition-colors hover:text-accent";

export function Services() {
  return (
    <section id="services" className="border-t border-hairline py-16 md:py-24 lg:py-[108px]">
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">

        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-[660px] text-center md:mb-[52px]">
          <h2 className="text-[clamp(2rem,4.4vw,2.7rem)] font-bold tracking-[-0.025em] text-ink">
            Our Services
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.7vw,1.15rem)] leading-relaxed text-muted">
            From manual exploratory testing to fully automated CI/CD pipelines — we
            cover every layer of your product quality.
          </p>
        </div>

        {/* 3 highlight cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {highlights.map((h) => (
            <Card key={h.title} className="rounded-[18px] p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-[18px] text-[2rem] leading-none">{h.icon}</div>
              <h3 className="mb-2 text-[1.15rem] font-bold text-ink">{h.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{h.desc}</p>
            </Card>
          ))}
        </div>

        {/* 4-column grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 rounded-[18px] border border-hairline bg-surface-soft p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-8">
          {/* Focus Area */}
          <div>
            <p className={colLabel}>Focus Area</p>
            <div className="flex flex-col">
              {focusAreas.map((item) => (
                <span key={item} className={colLink}>{item}</span>
              ))}
            </div>
            <a href="#contact" className="mt-3 flex items-center gap-1 text-[13px] font-semibold text-accent hover:opacity-80">
              All services <ArrowRight className="h-[13px] w-[13px]" />
            </a>
          </div>

          {/* Testing Coverage */}
          <div>
            <p className={colLabel}>Testing Coverage</p>
            <div className="flex flex-col">
              {testingCoverage.map((item) => (
                <span key={item} className={colLink}>{item}</span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <p className={colLabel}>Frameworks</p>
            <div className="flex flex-col">
              {frameworks.map((item) => (
                <span key={item} className={colLink}>{item}</span>
              ))}
            </div>
            <a href="#contact" className="mt-3 flex items-center gap-1 text-[13px] font-semibold text-accent hover:opacity-80">
              All frameworks <ArrowRight className="h-[13px] w-[13px]" />
            </a>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[18px] border border-hairline bg-surface-soft px-7 py-5">
          <p className="text-[15px] text-muted">
            Didn&apos;t find what you were looking for?{" "}
            <span className="text-ink">Tell us about your needs, and we&apos;ll create a solution designed for you.</span>
          </p>
          <Button asChild size="lg">
            <a href="/book-a-call">
              Book a Consultation
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
