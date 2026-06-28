"use client";

import {
  FileSearch2,
  UsersRound,
  Route,
  ClipboardCheck,
  History,
  BadgeCheck,
  Zap,
  Radar,
} from "lucide-react";

const ACCENT      = "#c0552f";
const RAIL_COLOR  = "#ddcdb4";
const BG_SECTION  = "#efe5d4";
const BG_CARD     = "#ffffff";
const TEXT_HEAD   = "#211a15";
const TEXT_BODY   = "#7a6f62";
const CHIP_BG     = "#f7e7db";
const PHASE_TEXT  = "#a8714f";
const EYEBROW_BG  = "#f7e3d6";

const DARK = {
  bg:   "#2c2620",
  title:"#ffffff",
  body: "#c9bfb2",
  icon: "#f0a07e",
  chip: "rgba(192,85,47,0.25)",
};

const phases = [
  {
    label: "Before a line of code",
    items: [
      {
        n: 1, Icon: FileSearch2,
        title: "Shift Left Process",
        desc:  "Our QA team involves at the requirements stage — understanding what problem we are solving for users, reviewing designs, and flagging gaps before a single line of code is written.",
        dark: false,
      },
      {
        n: 2, Icon: UsersRound,
        title: "Reviewing/Adding Acceptance Criteria Early",
        desc:  "We review acceptance criteria before development begins — flagging missing scenarios early to reduce back and forth between teams.",
        dark: false,
      },
    ],
  },
  {
    label: "While you build",
    items: [
      {
        n: 3, Icon: Route,
        title: "Manual Testing of Product",
        desc:  "Once code review is done, our QA team picks up and manually tests every possible scenario a user could encounter — ensuring it works exactly as intended.",
        dark: false,
      },
      {
        n: 4, Icon: ClipboardCheck,
        title: "Bug Reporting",
        desc:  "Every bug is documented with video, steps, logs and screenshots — so developers fix it without the back-and-forth.",
        dark: false,
      },
      {
        n: 5, Icon: History,
        title: "Regression Testing and QA Sign-Off",
        desc:  "We run regression testing on every release — covering all live functionality to catch unexpected breakages, and if looks all good our QA gives go-ahead.",
        dark: false,
      },
    ],
  },
  {
    label: "After launch",
    items: [
      {
        n: 6, Icon: BadgeCheck,
        title: "Production Check",
        desc:  "A final production check on every feature — confirming everything is up and running before your users see it.",
        dark: false,
      },
      {
        n: 7, Icon: Zap,
        title: "Automating Stable Features to Save Time",
        desc:  "Once a feature is stable, we automate it — so future regression runs in minutes, not days.",
        dark: false,
      },
      {
        n: 8, Icon: Radar,
        title: "Continuous Production Monitoring",
        desc:  "Most QA stops at launch. We don't. We test production continuously — so your users never hit an issue silently.",
        dark: true,
      },
    ],
  },
];

export function ProblemsWeSolve() {
  return (
    <section style={{ background: BG_SECTION, padding: "96px 32px" }}
      className="!py-16 !px-5 md:!py-24 md:!px-8">
<div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ maxWidth: 600, margin: "0 auto 64px", textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            background: EYEBROW_BG,
            color: ACCENT,
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            borderRadius: 999,
            padding: "5px 14px",
            marginBottom: 16,
          }}>
            Full-Lifecycle QA
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            color: TEXT_HEAD,
            margin: "0 0 16px",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}>
            This is What our QA Covers
          </h2>
          <p style={{ fontSize: 16, color: TEXT_BODY, lineHeight: 1.6, margin: 0 }}>
            From the first design review to live production monitoring — we own quality at every stage of your product&apos;s life.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical rail */}
          <div style={{
            position: "absolute",
            left: 27,
            top: 18,
            bottom: 18,
            width: 2,
            background: RAIL_COLOR,
            zIndex: 0,
          }} />

          {phases.map((phase, phaseIdx) => (
            <div key={phase.label}>
              {/* Phase label row */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                marginTop: phaseIdx === 0 ? 0 : 40,
                marginBottom: 16,
              }}>
                <div style={{ width: 56, flexShrink: 0, display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: ACCENT,
                    boxShadow: `0 0 0 4px ${BG_SECTION}`,
                  }} />
                </div>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: PHASE_TEXT,
                }}>
                  {phase.label}
                </span>
              </div>

              {/* Items */}
              {phase.items.map((item) => {
                const isDark = item.dark;
                return (
                  <div key={item.n} style={{ display: "flex", gap: 28, alignItems: "flex-start", marginBottom: 16 }}>

                    {/* Numbered node */}
                    <div style={{ width: 56, flexShrink: 0, display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: isDark ? ACCENT : BG_CARD,
                        border: `2px solid ${ACCENT}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: isDark ? "#fff" : ACCENT,
                      }}>
                        {item.n}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                      style={{
                      flex: 1,
                      background: isDark ? DARK.bg : BG_CARD,
                      border: isDark ? "none" : "1px solid #ece1d0",
                      borderRadius: 16,
                      padding: "14px 20px",
                    }}>
                      {/* Icon + title */}
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 38,
                          height: 38,
                          borderRadius: 10,
                          flexShrink: 0,
                          background: isDark ? DARK.chip : CHIP_BG,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          <item.Icon size={18} color={isDark ? DARK.icon : ACCENT} />
                        </div>
                        <h3 style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: 17,
                          color: isDark ? DARK.title : TEXT_HEAD,
                          margin: 0,
                          lineHeight: 1.3,
                        }}>
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p style={{
                        fontSize: 16,
                        lineHeight: 1.55,
                        color: isDark ? DARK.body : TEXT_BODY,
                        margin: "10px 0 0",
                        paddingLeft: 50,
                      }}>
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
