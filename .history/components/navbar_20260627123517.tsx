"use client";

import { useState, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const engagementModels = [
  { title: "Managed QA", desc: "Full ownership of your QA function." },
  { title: "QA Engineers for Hire", desc: "Flexible QA capacity when you need it." },
  { title: "Dedicated QA Teams", desc: "Embedded teams aligned with your roadmap." },
];

const focusAreas = [
  "Web App Testing",
  "Mobile App Testing",
  "API Testing",
  "Testing for SaaS",
  "Testing for Startups",
  "Cross-Platform Testing",
];

const testingCoverage = [
  "Regression Testing",
  "Functional Testing",
  "Integration Testing",
  "End-to-End Testing",
  "Performance Testing",
  "Compatibility Testing",
];

const frameworks = ["Playwright", "Cypress", "Selenium", "Appium", "Postman", "k6"];

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  function closeAll() {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-surface/80 backdrop-blur-md backdrop-saturate-150">
      <nav className="mx-auto flex max-w-container items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        <a href="#top" className="text-xl font-bold tracking-tight text-ink">
          GoLiveQA
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          <a href="#about" className="text-[17px] font-medium text-body transition-colors hover:text-ink">
            About
          </a>

          {/* Services mega-menu dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 text-[17px] font-medium text-body transition-colors hover:text-ink">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-[920px] -translate-x-1/2 overflow-y-auto rounded-[18px] border border-hairline bg-white p-6 shadow-lift" style={{maxHeight: "calc(100vh - 80px)"}}>

                {/* Top 3 highlight cards */}
                <div className="mb-5 grid grid-cols-3 gap-3 rounded-[12px] bg-surface-soft p-4">
                  {[
                    { icon: "⚙️", title: "Quality Engineering", text: "Deliver resilient, scalable software through enterprise-grade quality engineering." },
                    { icon: "🤖", title: "Test Automation", text: "Establish consistent, high-performance automation frameworks for dependable releases." },
                    { icon: "🔍", title: "Manual Testing", text: "Identify and resolve complex user experience issues with expert-led manual validation." },
                  ].map((card) => (
                    <div key={card.title} className="flex items-start gap-3 rounded-[10px] bg-white p-4 shadow-sm">
                      <span className="mt-0.5 text-[1.5rem] leading-none">{card.icon}</span>
                      <div>
                        <a href="#services" onClick={closeAll}
                          className="mb-1 block text-[15px] font-semibold text-ink underline underline-offset-2 hover:text-accent">
                          {card.title}
                        </a>
                        <p className="text-[13.5px] leading-snug text-muted">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mb-5 border-t border-hairline" />

                <div className="grid grid-cols-3 gap-6">
                  {/* Col 1 */}
                  <div>
                    <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-muted">Focus Area</p>
                    <div className="flex flex-col gap-2">
                      {focusAreas.map((item) => (
                        <span key={item} className="text-[15px] text-body">{item}</span>
                      ))}
                    </div>
                  </div>
                  {/* Col 3 */}
                  <div>
                    <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-muted">Testing Coverage</p>
                    <div className="flex flex-col gap-2">
                      {testingCoverage.map((item) => (
                        <span key={item} className="text-[15px] text-body">{item}</span>
                      ))}
                    </div>
                  </div>
                  {/* Col 4 */}
                  <div>
                    <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-muted">Frameworks</p>
                    <div className="flex flex-col gap-2">
                      {frameworks.map((item) => (
                        <span key={item} className="text-[15px] text-body">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-hairline bg-surface-soft px-5 py-3.5">
                  <p className="text-[14px] text-muted">
                    Didn&apos;t find what you were looking for? Tell us about your needs.
                  </p>
                  <a href="/book-a-call" onClick={closeAll}
                    className="flex items-center gap-1.5 text-[13.5px] font-semibold text-accent transition-opacity hover:opacity-80">
                    Book a Consultation <ArrowRight className="h-[14px] w-[14px]" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#process" className="text-[17px] font-medium text-body transition-colors hover:text-ink">Process</a>
          <a href="#contact" className="text-[17px] font-medium text-body transition-colors hover:text-ink">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href="/book-a-call">Book a Call</a>
          </Button>
          {/* Mobile hamburger */}
          <button
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-ink transition-all ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-hairline bg-white px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            <a href="#about" onClick={closeAll} className="py-2 text-[15px] font-medium text-body">About</a>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-2 text-[15px] font-medium text-body"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mb-2 mt-1 flex flex-col gap-4 rounded-[12px] border border-hairline bg-surface-soft p-4">
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">Engagement Models</p>
                    {engagementModels.map((item) => (
                      <a key={item.title} href="#services" onClick={closeAll}
                        className="block py-1 text-[14px] font-medium text-body hover:text-accent">{item.title}</a>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">Focus Area</p>
                    {focusAreas.map((item) => (
                      <a key={item} href="#services" onClick={closeAll}
                        className="block py-1 text-[14px] text-body hover:text-accent">{item}</a>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">Testing Coverage</p>
                    {testingCoverage.map((item) => (
                      <a key={item} href="#services" onClick={closeAll}
                        className="block py-1 text-[14px] text-body hover:text-accent">{item}</a>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">Frameworks</p>
                    {frameworks.map((item) => (
                      <a key={item} href="#services" onClick={closeAll}
                        className="block py-1 text-[14px] text-body hover:text-accent">{item}</a>
                    ))}
                  </div>
                  <a href="/book-a-call" onClick={closeAll}
                    className="flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                    Book a Consultation <ArrowRight className="h-[14px] w-[14px]" />
                  </a>
                </div>
              )}
            </div>

            <a href="#process" onClick={closeAll} className="py-2 text-[15px] font-medium text-body">Process</a>
            <a href="#contact" onClick={closeAll} className="py-2 text-[15px] font-medium text-body">Contact</a>
            <a href="/book-a-call" onClick={closeAll}
              className="mt-2 inline-flex items-center justify-center rounded-xl border-[1.5px] border-brand px-4 py-2 text-[14px] font-semibold text-brand">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
