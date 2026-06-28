import { AutomationTesting } from "@/components/AutomationTesting";

export const metadata = {
  title: "Automation Coverage — GoLiveQA",
  description: "We build and maintain automated test suites in Playwright and Cypress — turning days of regression into minutes.",
};

export default function AutomationCoveragePage() {
  return <AutomationTesting />;
}

        {/* What's included */}
        <section className="border-t border-hairline bg-surface-soft py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[560px] text-center">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
                What&apos;s Included
              </h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                End-to-end automation setup — from framework to pipeline to reporting.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[14px] border border-hairline bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  <p className="text-[15px] font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 text-center sm:px-8 lg:px-12">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.025em] text-ink">
              Ready to automate your testing?
            </h2>
            <p className="mt-3 text-[1rem] text-muted">
              Tell us about your stack and we&apos;ll design the right automation strategy.
            </p>
            <Button asChild size="lg" className="mt-7">
              <a href="/book-a-call">
                Book a Consultation <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
