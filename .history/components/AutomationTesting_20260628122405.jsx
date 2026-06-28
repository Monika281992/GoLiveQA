"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Check,
  Clock,
  Globe,
  Code2,
  Infinity,
  FileSearch2,
  ArrowRight,
} from "lucide-react";

const playwrightChecklist = [
  "True cross-browser coverage (Chromium, Firefox and WebKit/Safari)",
  "Flows spanning multiple tabs, origins or domains",
  "Fast parallel runs and mobile-web emulation out of the box",
  "Team works in TypeScript, Python, .NET or Java",
];

const cypressChecklist = [
  "App is a JavaScript front end (React, Vue, Angular)",
  "Team is front-end heavy and wants quick onboarding",
  "Values the visual test runner and time-travel debugging",
  "Wants component testing alongside e2e",
];

const frameworks = [
  {
    name: "Playwright",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    tagline: "Broad coverage, built for scale",
    desc: "Microsoft's modern automation framework — fast, parallel by default, and the widest browser reach available.",
    checklist: playwrightChecklist,
  },
  {
    name: "Cypress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    tagline: "Best-in-class developer experience",
    desc: "The front-end favourite — an interactive runner, time-travel debugging and instant feedback as you write.",
    checklist: cypressChecklist,
  },
];

const includedCards = [
  {
    Icon: Code2,
    title: "Suites in Playwright or Cypress",
    text: "Built in the framework that fits your stack — with a clean, readable structure your own engineers can extend.",
  },
  {
    Icon: Infinity,
    title: "Wired Into Your CI/CD",
    text: "The full suite runs automatically on every push and pull request — catching regressions before they ever merge.",
  },
  {
    Icon: FileSearch2,
    title: "Reports You Can Act On",
    text: "Screenshots, video and traces on every failure — pinpointing exactly what broke, where, and why.",
  },
];

export function AutomationTesting() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>

      {/* Hero */}
      <section style={{ background: "#efe5d4", padding: "92px 32px 84px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            background: "#f7e3d6",
            color: "#c0552f",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            borderRadius: 999,
            padding: "5px 14px",
            marginBottom: 16,
          }}>
            Automation Testing
          </span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            color: "#211a15",
            margin: "0 0 16px",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}>
            Automation That Pays for Itself
          </h1>
          <p style={{ fontSize: 16.5, color: "#7a6f62", lineHeight: 1.65, margin: "0 0 36px", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            We currently build and maintain automated test suites in Playwright and Cypress — with Selenium support on the way. Turning days of regression into minutes, on every release.
          </p>

          {/* Framework chips */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "#7a6f62" }}>Currently available in</span>
            {[
              { name: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
              { name: "Cypress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
            ].map(({ name, logo }) => (
              <span key={name} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#fff",
                border: "1px solid #e2d4bf",
                borderRadius: 999,
                padding: "6px 14px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#211a15",
              }}>
                <img src={logo} alt={name} width={17} height={17} style={{ display: "block" }} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks section */}
      <section style={{ background: "#faf6ef", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto 56px" }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#c0552f",
              margin: "0 0 12px",
            }}>
              Playwright vs Cypress
            </p>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 36px)",
              color: "#16233c",
              margin: "0 0 16px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}>
              Which framework is right for you?
            </h2>
            <p style={{ fontSize: 16, color: "#7a6f62", lineHeight: 1.6, margin: 0 }}>
              Both are excellent — the right pick depends on your stack, your browsers and your team. Here&apos;s how we decide.
            </p>
          </div>

          {/* Two framework cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}
            className="at-framework-grid"
          >
            {frameworks.map(({ name, logo, tagline, desc, checklist }) => (
              <div
                key={name}
                style={{
                  background: "#fff",
                  border: "1px solid #ece1d0",
                  borderRadius: 18,
                  padding: 34,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(45,33,20,.10)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                  <div style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "#f7e7db",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <img src={logo} alt={name} width={27} height={27} style={{ display: "block" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 21, color: "#16233c", margin: 0, lineHeight: 1.2 }}>{name}</p>
                    <p style={{ fontSize: 14, color: "#9a8f80", margin: 0 }}>{tagline}</p>
                  </div>
                </div>

                <p style={{ fontSize: 15, color: "#6f6557", lineHeight: 1.6, margin: "0 0 20px" }}>{desc}</p>

                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#c0552f",
                  margin: "0 0 14px",
                }}>
                  Choose it when
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {checklist.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <Check size={15} color="#c0552f" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: 14, color: "#6f6557", lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Selenium coming soon strip */}
          <div style={{
            background: "#f4efe6",
            border: "1px dashed #d8c9b2",
            borderRadius: 18,
            padding: "28px 34px",
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            flexWrap: "wrap",
          }}>
            <div style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: "#ece2d2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
            }}>
              <Globe size={22} color="#9a8f80" />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 19, color: "#7c7263" }}>Selenium</span>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: "#dff3e4",
                  color: "#2f8a4e",
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 999,
                  padding: "4px 10px",
                }}>
                  <Clock size={12} />
                  Coming soon
                </span>
              </div>
              <p style={{ fontSize: 14, color: "#7a6f62", lineHeight: 1.6, margin: 0 }}>
                For teams with existing Selenium suites or broad language and browser-grid requirements. We&apos;re adding full Selenium coverage next — talk to us if it&apos;s on your roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ background: "#ede3d2", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto 48px" }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#16233c",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}>
              What&apos;s Included
            </h2>
            <p style={{ fontSize: 16, color: "#7a6f62", lineHeight: 1.6, margin: 0 }}>
              Every automation engagement ships a suite your team owns — built right, run automatically, and easy to act on.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="at-included-grid">
            {includedCards.map(({ Icon, title, text }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #ece1d0",
                  borderTop: "3px solid #c0552f",
                  borderRadius: 14,
                  padding: "32px 30px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(45,33,20,.10)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#f7e7db",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}>
                  <Icon size={22} color="#c0552f" />
                </div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#16233c",
                  margin: "0 0 10px",
                  lineHeight: 1.25,
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: 15, color: "#7a6f62", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f4eee4", padding: "104px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#16233c",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            Ready to automate your regression?
          </h2>
          <p style={{ fontSize: 16, color: "#7a6f62", lineHeight: 1.6, margin: "0 0 36px" }}>
            Tell us about your product and we&apos;ll scope the right automation suite — in Playwright or Cypress.
          </p>
          <a
            href="/book-a-call"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#0450d4",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 9,
              padding: "14px 28px",
              textDecoration: "none",
              boxShadow: "0 6px 18px rgba(4,80,212,.28)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#0337a8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0450d4"; }}
          >
            Book a Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .at-framework-grid { grid-template-columns: 1fr !important; }
          .at-included-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </main>
      <Footer />
    </div>
  );
}
