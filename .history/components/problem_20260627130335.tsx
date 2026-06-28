const problems = [
  {
    title: "Bugs reach production",
    description:
      "Without dedicated QA, critical issues slip through code reviews and land in front of real users — damaging trust and requiring costly hotfixes.",
  },
  {
    title: "No release confidence",
    description:
      "Teams ship on hope, not evidence. A missed regression or untested edge case can stall a release or roll back a deployment at the worst time.",
  },
  {
    title: "QA is an afterthought",
    description:
      "Testing gets squeezed into the last 10% of a sprint. There's no strategy, no coverage plan, and no visibility into what's actually been tested.",
  },
  {
    title: "Automation is broken or absent",
    description:
      "Either there's no automation at all, or a fragile suite that nobody trusts — leaving teams running the same manual checks every single release.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-hairline bg-surface-soft py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
            What problem are we solving?
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.7vw,1.1rem)] leading-relaxed text-muted">
            Most startups don&apos;t have a QA problem — they have a visibility problem. Here&apos;s what that looks like in practice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-[16px] border border-hairline bg-white p-6 shadow-sm"
            >
              <h3 className="text-[1rem] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
