import {
  TestTube2,
  Smartphone,
  Globe,
  Globe2,
  Trophy,
  Settings2,
  Brain,
  Cloud,
  MessageSquare,
  Eye,
  ShieldCheck,
  Gauge,
  RefreshCw,
  Monitor,
  Accessibility,
  Languages,
  Database,
  Gamepad2,
  Wifi,
  Link2,
  Layers,
  Plug,
  Tablet,
} from "lucide-react";

function AppleIcon({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M12 5c0 0 1.5-3 4-3 0 2.5-2 4-2 4s2.5 0 4 2c1.5 2 1 5-.5 7s-3.5 3-5.5 3-4-1-5.5-3-2-5-.5-7c1.5-2 4-2 4-2s-2-1.5-2-4c2.5 0 4 3 4 3z"/>
      <path d="M8 2c0 0 1 2 4 2"/>
    </svg>
  );
}

const rows = [
  [
    { Icon: TestTube2,     label: "Functional Testing" },
    { Icon: Smartphone,    label: "Mobile App Testing" },
    { label: "iOS Testing", isApple: true },
    { Icon: Globe2,        label: "API Testing" },
    { Icon: Trophy,        label: "Bug Bounty" },
    { Icon: Settings2,     label: "Automation QA" },
  ],
  [
    { Icon: Brain,         label: "AI & ML Model Testing" },
    { Icon: Cloud,         label: "Cloud Testing" },
    { Icon: MessageSquare, label: "LLM Testing" },
    { Icon: Eye,           label: "Usability & UX Testing" },
    { Icon: ShieldCheck,   label: "Security & Penetration Testing" },
  ],
  [
    { Icon: Gauge,         label: "Performance Testing" },
    { Icon: RefreshCw,     label: "Regression Testing" },
    { Icon: Monitor,       label: "Cross-Browser Testing" },
    { Icon: Accessibility, label: "Accessibility Testing" },
  ],
  [
    { Icon: Languages,     label: "Localization Testing" },
    { Icon: Database,      label: "Database Testing" },
    { Icon: Gamepad2,      label: "Game Testing" },
    { Icon: Wifi,          label: "IoT Testing" },
    { Icon: Link2,         label: "Blockchain Testing" },
  ],
  [
    { Icon: Layers,        label: "Compatibility Testing" },
    { Icon: Plug,          label: "Integration Testing" },
  ],
];

export function WhatWeTest() {
  return (
    <section style={{ background: "#ffffff", padding: "96px 32px" }}
      className="!pt-20 !pb-20 md:!pt-28 md:!pb-28">
<div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12,
          textTransform: "uppercase", letterSpacing: "0.16em", color: "#c0552f",
          margin: "0 0 16px", textAlign: "center",
        }}>
          What we test
        </p>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 700,
          fontSize: "clamp(2rem, 4.4vw, 2.7rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.025em", textAlign: "center", margin: "0 0 40px",
        }}>
          <span style={{ color: "#16233c" }}>Every type of testing.</span>
          <br />
          <span style={{ color: "#c4b8a6" }}>One platform.</span>
        </h2>

        {/* Items grid */}
        <style>{`
          .wwt-item {
            display: inline-flex; align-items: center; gap: 7px;
            padding: 7px 20px;
            border-radius: 999px;
            border: 1px solid #e0d8cc;
            background: #fff;
            color: #6f6557;
            font-size: 14px;
            font-weight: 700;
            white-space: nowrap;
            opacity: 0.6;
            cursor: default;
            transition: opacity .2s, box-shadow .2s, transform .2s, border-color .2s;
          }
          .wwt-item:hover {
            opacity: 1;
            color: #111;
            font-weight: 700;
            border-color: #b5542d;
            box-shadow: 0 6px 20px rgba(0,0,0,.10);
            transform: translateY(-2px);
          }
          @media (max-width: 639px) {
            .wwt-item {
              font-size: 13px;
              padding: 10px 18px;
              gap: 7px;
            }
          }
        `}</style>
        <div className="wwt-grid" style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}>
              {row.map(({ Icon, label, isApple }: any) => (
                <span key={label} className="wwt-item">
                  {isApple
                    ? <AppleIcon size={14} color="#c0552f" />
                    : <Icon size={14} color="#c0552f" strokeWidth={1.8} style={{ flexShrink: 0 }} />
                  }
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
