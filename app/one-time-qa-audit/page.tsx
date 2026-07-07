import { Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatWeAudit from "@/components/WhatWeAudit";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import HeroEmailForm from "@/components/HeroEmailForm";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "One-Time QA Audit — GoLiveQA",
  description:
    "Get a clear, prioritized picture of every bug, gap, and risk in your product. Delivered in 5–7 business days. No retainer required.",
};

export default function OneTimeQAAuditPage() {
  return (
    <div className={manrope.className} style={{ background: "#f7f3ec", minHeight: "100vh" }}>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          style={{ background: "#efe5d4", padding: "92px 32px 84px" }}
        >
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
              One-time engagement · No retainer
            </h1>

            <p style={{
              maxWidth: 600, margin: "0 auto 36px",
              fontSize: 16.5,
              color: "#7a6f62", lineHeight: 1.65,
            }}>
              Get a clear, prioritized picture of every bug, gap, and risk in your
              product before your next release, your next funding round, or your next
              big customer demo.
            </p>

            <HeroEmailForm buttonLabel="Book Your Audit" />

            <p style={{ marginTop: 18, fontSize: 13, color: "#948d80", fontFamily: "'Poppins', sans-serif" }}>
              One flat scope · No ongoing commitment
            </p>
          </div>
        </section>

        <HowItWorks />
        <WhoThisIsFor />
        <WhatWeAudit />
        <WhatYouGet />
        <FAQ />
        <CTABand />

      </main>
      <Footer />
    </div>
  );
}
