import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { WhatQACovers } from "@/components/WhatQACovers";
import { ArrowRight, TestTube, Users, Eye } from "lucide-react";

export const metadata = {
  title: "Manual Testing — GoLiveQA",
  description: "Expert-led manual testing services for startups and fast-moving teams.",
};

const highlights = [
  {
    Icon: TestTube,
    title: "All Types of Manual Testing",
    text: "From exploratory and functional to UI/UX and regression — every type covered to improve your product quality.",
  },
  {
    Icon: Users,
    title: "Always Available During Working Hours",
    text: "Our QA team is available during working hours to coordinate directly with your engineering team — no delays, no back and forth.",
  },
  {
    Icon: Eye,
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
        <section className="border-t border-hairline bg-surface-soft" style={{ padding: "96px 32px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
                What&apos;s Included
              </h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                Every engagement covers the full testing cycle — no gaps, no guesswork.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {highlights.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: "#fff",
                    border: "1px solid #ece1d0",
                    borderTop: "3px solid #c0552f",
                    borderRadius: 14,
                    padding: "32px 30px",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "#f7e7db",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={22} color="#c0552f" />
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 18, color: "#16233c", marginBottom: 10, lineHeight: 1.25 }}>{title}</p>
                  <p style={{ fontSize: 15, color: "#7a6f62", lineHeight: 1.6, margin: 0 }}>{text}</p>
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
