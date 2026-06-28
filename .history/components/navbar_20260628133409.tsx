"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Globe, Smartphone, Webhook, Monitor, LayoutDashboard, Layers, RefreshCw, CheckCircle2, GitMerge, Workflow, Zap, MonitorSmartphone, Shield, Code2, FileCode, Terminal, Send, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const engagementModels = [
  { title: "Managed QA", desc: "Full ownership of your QA function." },
  { title: "QA Engineers for Hire", desc: "Flexible QA capacity when you need it." },
  { title: "Dedicated QA Teams", desc: "Embedded teams aligned with your roadmap." },
];

const focusAreas = [
  { label: "Web App Testing", desc: "End-to-end web app coverage", icon: Globe },
  { label: "Mobile App Testing", desc: "iOS and Android validation", icon: Smartphone },
  { label: "API Testing", desc: "REST & GraphQL endpoints", icon: Webhook },
  { label: "Desktop App Testing", desc: "Windows & macOS coverage", icon: Monitor },
  { label: "Dashboard Testing", desc: "Analytics & reporting checks", icon: LayoutDashboard },
  { label: "Cross-Platform Testing", desc: "Consistent across all platforms", icon: Layers },
];

const testingCoverage = [
  { label: "Regression Testing", desc: "Catch bugs before each release", icon: RefreshCw },
  { label: "Functional Testing", desc: "Verify every feature works", icon: CheckCircle2 },
  { label: "Integration Testing", desc: "Test component interactions", icon: GitMerge },
  { label: "End-to-End Testing", desc: "Full user journey validation", icon: Workflow },
  { label: "Performance Testing", desc: "Load and speed benchmarks", icon: Zap },
  { label: "Compatibility Testing", desc: "Works across browsers & devices", icon: MonitorSmartphone },
];

const frameworks = [
  { label: "Playwright", desc: "Modern browser automation", icon: Code2 },
  { label: "Cypress", desc: "Fast front-end testing", icon: FileCode },
  { label: "Selenium", desc: "Cross-browser testing", icon: Terminal },
  { label: "Appium", desc: "Mobile automation framework", icon: Smartphone },
  { label: "Postman", desc: "API testing & monitoring", icon: Send },
  { label: "k6", desc: "Load testing at scale", icon: Activity },
];

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const serviceRoutes = ["/manual-testing", "/automation-coverage", "/quality-engineering"];
  const isOnServicePage = serviceRoutes.some((r) => pathname.startsWith(r));

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = ["about", "process", "contact"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

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
        <a href="/" className="text-xl font-bold tracking-tight text-ink">
          GoLiveQA
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          <a href="/#about" className={`text-[17px] font-medium transition-colors hover:text-ink ${activeSection === "about" ? "text-accent" : "text-body"}`}>
            About
          </a>

          {/* Services mega-menu dropdown */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center gap-1 text-[17px] font-medium transition-colors hover:text-ink ${isOnServicePage ? "text-accent" : "text-body"}`}>
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-[1100px] -translate-x-1/2 rounded-[18px] border border-hairline bg-white p-6 shadow-lift">

                {/* Top 3 highlight cards */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: "🔍", title: "Manual Testing", href: "/manual-testing", text: "Identify and resolve complex user experience issues with expert-led manual validation." },
                    { icon: "🤖", title: "Automation Coverage", href: "/automation-coverage", text: "Establish consistent, high-performance automation frameworks for dependable releases." },
                    { icon: "⚙️", title: "QA Consultation", href: "/quality-engineering", text: "Discover your QA gaps and get a clear roadmap to fix them." },
                  ].map((card) => (
                    <a key={card.title} href={card.href} onClick={closeAll} className={`flex items-start gap-3 rounded-[10px] border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lift cursor-pointer no-underline ${
                      pathname.startsWith(card.href) ? "border-accent/40 bg-accent/5" : "border-hairline hover:border-accent/30"
                    }`}>
                      <span className="mt-0.5 text-[1.5rem] leading-none">{card.icon}</span>
                      <div>
                        <p className="mb-1 text-[15px] font-semibold text-ink">
                          {card.title}
                        </p>
                        <p className="text-[13.5px] leading-snug text-muted">{card.text}</p>
                      </div>
                    </a>
                  ))}
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

          <a href="/#process" className={`text-[17px] font-medium transition-colors hover:text-ink ${activeSection === "process" ? "text-accent" : "text-body"}`}>Process</a>
          <a href="/#contact" className={`text-[17px] font-medium transition-colors hover:text-ink ${activeSection === "contact" ? "text-accent" : "text-body"}`}>Contact</a>
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
            <a href="/#about" onClick={closeAll} className="py-2 text-[15px] font-medium text-body">About</a>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-2 text-[15px] font-medium text-body"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mb-2 mt-1 flex flex-col gap-3 rounded-[12px] border border-hairline bg-surface-soft p-4">
                  {[
                    { icon: "🔍", title: "Manual Testing", href: "/manual-testing" },
                    { icon: "🤖", title: "Automation Coverage", href: "/automation-coverage" },
                    { icon: "⚙️", title: "QA Consultation", href: "/quality-engineering" },
                  ].map((card) => (
                    <a key={card.title} href={card.href} onClick={closeAll}
                      className="flex items-center gap-3 rounded-[8px] border border-hairline bg-white px-4 py-3 text-[14px] font-medium text-ink hover:text-accent">
                      <span className="text-[1.2rem] leading-none">{card.icon}</span>
                      {card.title}
                    </a>
                  ))}
                  <a href="/book-a-call" onClick={closeAll}
                    className="flex items-center gap-1.5 pt-1 text-[13.5px] font-semibold text-accent">
                    Book a Consultation <ArrowRight className="h-[14px] w-[14px]" />
                  </a>
                </div>
              )}
            </div>

            <a href="/#process" onClick={closeAll} className="py-2 text-[15px] font-medium text-body">Process</a>
            <a href="/#contact" onClick={closeAll} className="py-2 text-[15px] font-medium text-body">Contact</a>
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
