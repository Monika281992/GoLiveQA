const problems = [
  {
    icon: "🎨",
    title: "Catching Issues Before Development Starts",
    description:
      "We review requirements and designs early — flagging gaps, edge cases, and UX issues before a single line of code is written.",
  },
  {
    icon: "🔍",
    title: "Thinking Like Your Users Before They Do",
    description:
      "We analyse every requirement and map out all the ways a feature could break in the real world — before it reaches your users.",
  },
  {
    icon: "🧪",
    title: "Testing Every Possible User Scenario",
    description:
      "Once a feature is built, we test every possible path a user could take — ensuring it works exactly as intended, every time.",
  },
  {
    icon: "🐛",
    title: "Bug Reports That Actually Get Fixed",
    description:
      "Every bug is documented with videos, steps, logs, screenshots, and a clear description — so developers fix it without back and forth.",
  },
  {
    icon: "🔄",
    title: "Regression Testing After Every Change",
    description:
      "Every new feature is tested to ensure it hasn't broken anything that was already working in production.",
  },
  {
    icon: "🚀",
    title: "Final Sign-Off Before Going Live",
    description:
      "Once a feature is live, we do a final production check — confirming everything is up and running before your users see it.",
  },
  {
    icon: "⚙️",
    title: "Automating Stable Features to Save Time",
    description:
      "Once a feature is stable in production, we automate it — so future regression runs in minutes, not days.",
  },
  {
    icon: "👁️",
    title: "Continuous Production Monitoring",
    description:
      "Most QAs stop once a feature is live. We don't. We continuously test production on a regular basis — so your end users never face an issue silently.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-hairline bg-surface-soft py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
            What Problems We Solve
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.7vw,1.1rem)] leading-relaxed text-muted">
            From the first design discussion to production — we own quality at every stage of your product development.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-[16px] border border-hairline bg-white p-6 shadow-sm"
            >
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-3 text-[1rem] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

