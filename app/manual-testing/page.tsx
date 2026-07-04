import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatQACovers } from "@/components/WhatQACovers";
import { CTAEmailCapture } from "@/components/CTAEmailCapture";
import HeroEmailForm from "@/components/HeroEmailForm";
import { Globe, Smartphone, Braces, TestTube, Users, Eye } from "lucide-react";

export const metadata = {
  title: "Manual Testing — GoLiveQA",
  description: "Expert-led manual testing services for startups and fast-moving teams.",
};

const highlights = [
  {
    Icon: TestTube,
    title: "All Types of Manual Testing",
    text: "Exploratory, functional, UI/UX and regression — every manual testing type covered to improve your product quality.",
  },
  {
    Icon: Users,
    title: "Real-Time Team Coordination",
    text: "Our QA team coordinates directly with your engineers during working hours — no delays, no back and forth.",
  },
  {
    Icon: Eye,
    title: "UI/UX Feedback",
    text: "We go beyond finding bugs — sharing UI/UX feedback during testing to improve the product before it reaches users.",
  },
];

export default function ManualTestingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{ background: "#efe5d4", padding: "92px 32px 84px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              color: "#211a15",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}>
              Human Eyes on Every Release
            </h1>

            <p style={{
              maxWidth: 600, margin: "0 auto 28px",
              fontSize: 16.5,
              color: "#7a6f62", lineHeight: 1.65,
            }}>
              We manually test every core flow the way a real user would —
              catching the edge cases, broken states, and confusing UX that
              automated scripts sail right past.
            </p>

            <HeroEmailForm buttonLabel="Book a Call" />

            {/* Badges */}
            <div id="mt-chips" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <span style={{ fontSize: 13, color: "#7a6f62", fontFamily: "'Poppins', sans-serif" }}>Currently available in</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {[
                  { label: "Web", Icon: Globe },
                  { label: "Mobile", Icon: Smartphone },
                  { label: "API", Icon: Braces },
                ].map(({ label, Icon }) => (
                  <span key={label} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "#fff", border: "1px solid #e2d4bf",
                    borderRadius: 999, padding: "6px 14px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600, fontSize: 14, color: "#211a15",
                  }}>
                    <Icon size={15} color="#c0552f" strokeWidth={2} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <style>{`
              @media (max-width: 600px) {
                #mt-chips { flex-direction: column !important; }
              }
            `}</style>
          </div>
        </section>

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
        <CTAEmailCapture
          heading="Ready to ship with confidence?"
          subtext="Tell us about your product and we'll put together the right testing plan."
        />
      </main>
      <Footer />
    </div>
  );
}
