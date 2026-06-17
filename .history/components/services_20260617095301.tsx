import {
  Search,
  Webhook,
  Workflow,
  MonitorSmartphone,
  GitMerge,
  MessageSquareText,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Search,
    title: "Manual Testing",
    desc: "Functional, regression and exploratory testing before every release. Bugs caught, not shipped.",
  },
  {
    icon: Webhook,
    title: "API Testing via Postman",
    desc: "REST and SOAP endpoint validation via Postman. Every API tested before your frontend hits it.",
  },
  {
    icon: Workflow,
    title: "Test Automation (Playwright & Cypress)",
    desc: "Playwright and Cypress frameworks built from scratch. Regression done in minutes, not days.",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Testing",
    desc: "Web and mobile tested across iOS, Android and all browsers. Works on every screen, every time.",
  },
  {
    icon: GitMerge,
    title: "CI/CD Integration",
    desc: "Tests run automatically on every commit. Bugs blocked before they reach production.",
  },
  {
    icon: MessageSquareText,
    title: "Custom Slack Test Reports",
    desc: "Test results in your Slack the moment runs complete. No logins, no extra tools needed.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-[108px]">
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-9 max-w-[660px] text-center md:mb-[52px]">
          <h2 className="text-[clamp(2rem,4.4vw,2.7rem)] font-bold tracking-[-0.025em] text-ink">
            How can i help
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.7vw,1.15rem)] leading-relaxed text-muted">
            From manual exploratory testing to fully automated CI/CD pipelines — we
            cover every layer of your product quality.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.title}
                className="group rounded-[18px] p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-accent-soft text-accent">
                  <Icon className="h-[22px] w-[22px]" />
                </div>
                <h3 className="mb-2 text-[1.15rem] font-bold text-ink">{s.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
              </Card>
            );
          })}
        </div>
        <div className="mt-9 text-center md:mt-12">
          <Button asChild size="lg">
            <a href="#contact">
              Let&apos;s Work Together
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
