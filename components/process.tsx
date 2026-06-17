import { Card } from "@/components/ui/card";

const steps = [
  {
    n: "01",
    title: "We Talk First",
    desc: "A quick call to understand your product and how your team works.",
  },
  {
    n: "02",
    title: "I Plan Everything",
    desc: "Test strategy, test cases, and the right mix of manual and automated testing for your product.",
  },
  {
    n: "03",
    title: "I Test Every Feature Before It Ships",
    desc: "Manual and automated tests every sprint. Clear go/no-go before anything ships.",
  },
  {
    n: "04",
    title: "You Always Know What's Happening",
    desc: "Results land in your Slack automatically. No chasing updates before every release.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-hairline bg-surface-soft py-16 md:py-24 lg:py-[108px]"
    >
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[660px] text-center">
          <h2 className="text-[clamp(2rem,4.4vw,2.7rem)] font-bold tracking-[-0.025em] text-ink">
            What Working With Me Looks Like
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.7vw,1.15rem)] leading-relaxed text-muted">
            Simple, transparent, and built around your team — here&apos;s exactly what
            happens when you hire me.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card
              key={s.n}
              className="rounded-[18px] p-7 pt-[30px] transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-accent text-[19px] font-bold text-white shadow-[0_8px_18px_-8px_#c2613f]">
                {s.n}
              </div>
              <h3 className="mb-2 text-[1.1rem] font-bold text-ink">{s.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
