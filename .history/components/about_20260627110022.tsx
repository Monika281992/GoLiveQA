import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { value: "9+", label: "Years Expertise" },
  { value: "300+", label: "Test Cases Delivered" },
  { value: "95%", label: "Faster Regression" },
  { value: "4", label: "Industries Served" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-[108px]">
      <div className="mx-auto flex max-w-container flex-wrap items-start gap-10 px-5 sm:px-8 md:gap-12 lg:gap-[72px] lg:px-12">
        {/* Bio */}
        <div className="min-w-[300px] flex-1 basis-[400px]">
          <h2 className="text-[clamp(2rem,4.4vw,2.7rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            About GoLiveQA
          </h2>
          <p className="mb-7 mt-3.5 text-[1.05rem] font-semibold text-gray-700">
            Boutique QA Consultancy · 9 Years · Healthcare, SaaS, AI &amp; Real Estate
          </p>
          <p className="mb-5 text-[1.02rem] leading-[1.7] text-body">
            GoLiveQA is a boutique QA consultancy specializing in end-to-end software testing
            for fast-moving startups. Founded by Monika Chaudhary — a senior QA engineer with 9 years
            of experience at ImageKit, Clipboard Health, Housr, and Netomi.
          </p>
          <p className="mb-5 text-[1.02rem] leading-[1.7] text-body">
            We&apos;ve built 300+ Playwright and Cypress automation frameworks, integrated CI/CD pipelines
            running tests on every commit, and managed production releases across multiple teams with
            zero critical escapes. Regression time cut from 1 day to under 1 hour.
          </p>
          <p className="mb-2 text-[1.02rem] leading-[1.7] text-body">
            Unlike large QA agencies, every GoLiveQA engagement is handled personally by our founder.
            You get senior expertise, direct communication, and full ownership of your product quality —
            without the overhead of a large firm.
          </p>
          <Button asChild>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </Button>
        </div>

        {/* Photo + stats */}
        <div className="flex min-w-[280px] flex-1 basis-[320px] flex-col gap-7">
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -bottom-4 -left-4 -z-0 h-[82%] w-[82%] rounded-[28px] bg-accent-soft" />
            <div className="relative z-10 rounded-3xl border border-hairline bg-white p-3 shadow-photo">
              {/* Replace /monika.jpg with your photo in /public */}
              <img
                src="/monika.jpg"
                alt="Monika Chaudhary"
                className="block aspect-[4/5] w-full rounded-2xl bg-surface object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map((s) => (
              <Card key={s.label} className="rounded-2xl p-[22px]">
                <div className="text-[clamp(1.8rem,3vw,2.2rem)] font-bold leading-none text-brand">
                  {s.value}
                </div>
                <div className="mt-[7px] text-[13px] text-muted">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
