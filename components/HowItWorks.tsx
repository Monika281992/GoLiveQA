const phases = [
  {
    flex: 1.3,
    day: "WEEK 1",
    title: "Scope call & product understanding",
    bandBg: "#f3e3d8",
    dayColor: "#b5542d",
    titleColor: "#1c1a16",
    emphasis: false,
    desc: "We align on your product, priorities, and the risk areas that matter most, then get hands-on with your product ahead of testing.",
  },
  {
    flex: 4,
    day: "WEEK 2–3",
    title: "Deep testing",
    bandBg: "#b5542d",
    dayColor: "rgba(255,255,255,.8)",
    titleColor: "#fff",
    emphasis: true,
    desc: "Hands-on manual testing across every dimension above, done by a senior QA engineer — never an automated scan.",
  },
  {
    flex: 1.4,
    day: "Week 4",
    title: "Report, prioritization & walkthrough call",
    bandBg: "#f3e3d8",
    dayColor: "#b5542d",
    titleColor: "#1c1a16",
    emphasis: false,
    desc: "Findings written up and ranked P0–P3 with clear reproduction steps, then walked through live with your team.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ background: "#faf6ef", padding: "96px 32px" }}>
      <style>{`
        @media (max-width: 719px) {
          .hiw-track { flex-direction: column !important; }
          .hiw-phase { flex: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Eyebrow */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.16em", color: "#c0552f", margin: "0 0 12px", textAlign: "center" }}>
          How it works
        </p>

        {/* H2 */}
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 36px)", color: "#16233c", letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.15, textAlign: "center" }}>
          What to expect, week by week
        </h2>

        {/* Sub-line */}
        <p style={{ fontSize: 16, color: "#6f6557", lineHeight: 1.6, maxWidth: 520, margin: "0 auto 32px", textAlign: "center" }}>
          From kickoff to a recorded walkthrough in about a month. Each band below is sized to the time it takes.
        </p>

        {/* Axis row */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: "#948d80" }}>
          <span>KICKOFF</span>
          <span>2 WEEKS</span>
          <span>DELIVERY</span>
        </div>

        {/* Band row */}
        <div className="hiw-track" style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
          {phases.map(({ flex, day, title, bandBg, dayColor, titleColor, emphasis, desc }) => (
            <div
              key={day}
              className="hiw-phase"
              style={{ flex, display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}
            >
              {/* Band */}
              <div style={{
                borderRadius: 16,
                padding: "22px 20px",
                minHeight: 148,
                background: bandBg,
                display: "flex",
                flexDirection: "column",
                boxShadow: emphasis ? "0 12px 30px rgba(181,84,45,.28)" : "none",
              }}>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", color: dayColor }}>
                  {day}
                </span>
                <span style={{
                  marginTop: "auto",
                  fontSize: emphasis ? 22 : 19,
                  fontWeight: emphasis ? 800 : 700,
                  color: titleColor,
                  lineHeight: 1.2,
                }}>
                  {title}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: 14, color: "#6f695e", lineHeight: 1.5, padding: "0 4px", margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

