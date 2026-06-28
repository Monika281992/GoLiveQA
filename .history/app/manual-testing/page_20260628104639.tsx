import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { WhatQACovers } from "@/components/WhatQACovers";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Manual Testing — GoLiveQA",
  description: "Expert-led manual testing services for startups and fast-moving teams.",
};

const highlights = [
  {
    title: "All Types of Manual Testing",
    text: "From exploratory and functional to UI/UX and regression — we cover every type of manual testing to improve your product quality.",
  },
  {
    title: "Always Available During Working Hours",
    text: "Our QA team is available during working hours to coordinate directly with your engineering team — no delays, no back and forth.",
  },
  {
    title: "UI/UX Feedback That Improves the Product",
    text: "Beyond just finding bugs, we share UI/UX feedback during testing — helping improve the product experience before it reaches users.",
  },
];

export default function ManualTestingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>

        {/* How We Work timeline */}
        <WhatQACovers />

        {/* What's included */}
        <section className="border-t border-hairline bg-surface-soft py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
                What&apos;s Included
              </h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                Every engagement covers the full testing cycle — no gaps, no guesswork.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-[14px] border border-hairline bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 text-center sm:px-8 lg:px-12">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
              Ready to ship with confidence?
            </h2>
            <p className="mt-3 text-[1rem] text-muted">
              Tell us about your product and we&apos;ll put together the right testing plan.
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
