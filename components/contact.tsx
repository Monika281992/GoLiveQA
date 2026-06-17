"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/icons";

const services = [
  "Manual Testing",
  "API Testing via Postman",
  "Test Automation (Playwright & Cypress)",
  "Cross-Platform Testing",
  "CI/CD Integration",
  "Custom Slack Test Reports",
];

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.06em] text-muted";
const fieldClass =
  "w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-3 text-[15px] text-ink transition-all outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/15";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-hairline bg-surface-soft py-16 md:py-24 lg:py-[108px]"
    >
      <div className="mx-auto flex max-w-container flex-wrap items-start gap-10 px-5 sm:px-8 md:gap-12 lg:gap-[72px] lg:px-12">
        {/* Details */}
        <div className="min-w-[280px] flex-1 basis-[300px]">
          <h3 className="mb-2 text-[clamp(1.5rem,3vw,1.9rem)] font-bold tracking-[-0.02em] text-ink">
            Contact Details
          </h3>
          <p className="mb-[30px] text-base leading-relaxed text-muted">
            Reach out directly or send a message — I usually reply within a day.
          </p>
          <div className="flex flex-col gap-[18px]">
            <a href="mailto:monika@goliveqa.com" className="flex items-center gap-[15px]">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-hairline bg-white text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.06em] text-faint">
                  Email
                </span>
                <span className="text-[15.5px] font-medium text-brand">
                  monika@goliveqa.com
                </span>
              </span>
            </a>
            <a href="tel:+917291046761" className="flex items-center gap-[15px]">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-hairline bg-white text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.06em] text-faint">
                  Phone
                </span>
                <span className="text-[15.5px] font-medium text-brand">
                  +91-7291046761
                </span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[15px]"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-hairline bg-white text-accent">
                <LinkedInIcon className="h-[19px] w-[19px]" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.06em] text-faint">
                  LinkedIn
                </span>
                <span className="text-[15.5px] font-medium text-brand">
                  Monika Chaudhary
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="min-w-[300px] flex-1 basis-[440px]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-[18px] rounded-[22px] border border-hairline bg-white p-6 shadow-card sm:p-9"
          >
            <div>
              <label className={labelClass}>
                Your Name <span className="text-accent">*</span>
              </label>
              <input type="text" placeholder="John Smith" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>
                Work Email <span className="text-accent">*</span>
              </label>
              <input type="email" placeholder="john@company.com" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Company</label>
              <input type="text" placeholder="Your Company Name" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Service Needed</label>
              <select className={fieldClass} defaultValue={services[0]}>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Tell Us About Your Product</label>
              <textarea
                rows={4}
                placeholder="What are you building? What's your tech stack? What QA challenges are you facing?"
                className={`${fieldClass} resize-y`}
              />
            </div>
            <Button type="submit" className="self-start">
              Send Message
              <ArrowRight className="h-[18px] w-[18px]" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
