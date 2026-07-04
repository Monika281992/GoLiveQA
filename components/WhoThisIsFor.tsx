import { Rocket, Zap, GitBranch, Users } from "lucide-react";

const items = [
  { Icon: Rocket,    text: "You're about to launch, raise, or close a deal — and you can't afford a surprise." },
  { Icon: Zap,       text: "Your team has been shipping fast and nobody has stress-tested the full product in months." },
  { Icon: GitBranch, text: "You inherited a codebase and have no idea where the QA gaps are." },
  { Icon: Users,     text: "You're trying to decide whether to build an in-house QA function — and want an honest outside view first." },
];

export default function WhoThisIsFor() {
  return (
    <section style={{ background: "#faf6ef", padding: "96px 32px" }}>
      <style>{`
        .wtif-card { transition: transform .2s, box-shadow .2s; }
        .wtif-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(45,33,20,.10) !important; }
        @media (max-width: 639px) { .wtif-grid { grid-template-columns: 1fr !important; } }
      `}</style>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12,
          textTransform: "uppercase", letterSpacing: "0.16em", color: "#c0552f",
          margin: "0 0 12px", textAlign: "center",
        }}>
          Who this is for
        </p>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 700,
          fontSize: "clamp(26px, 4vw, 36px)", color: "#16233c",
          margin: "0 0 48px", lineHeight: 1.15, letterSpacing: "-0.02em", textAlign: "center",
        }}>
          For teams about to make a big move
        </h2>
        <div className="wtif-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {items.map(({ Icon, text }) => (
            <div key={text} className="wtif-card" style={{
              background: "#fff", border: "1px solid #ece1d0", borderRadius: 18,
              padding: 34, display: "flex", alignItems: "flex-start", gap: 20,
              boxShadow: "0 1px 4px rgba(0,0,0,.04)",
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, background: "#f7e7db",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={22} color="#c0552f" strokeWidth={2} />
              </div>
              <p style={{ fontSize: 15, color: "#6f6557", lineHeight: 1.6, margin: 0, paddingTop: 4 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
