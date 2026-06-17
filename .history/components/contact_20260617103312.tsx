"use client";

import { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: services[0],
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center gap-6 rounded-[22px] border border-hairline bg-white p-6 shadow-card sm:p-9 text-center min-h-[400px]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-ink">Thank You!</h3>
                <p className="text-base text-muted max-w-md">
                  Your message has been sent successfully. I'll review your inquiry and get back to you within 24 hours.
                </p>
              </div>
              <Button
                onClick={() => setIsSuccess(false)}
                variant="outline"
                className="mt-4"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[18px] rounded-[22px] border border-hairline bg-white p-6 shadow-card sm:p-9"
            >
              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className={labelClass}>
                  Your Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>
                  Work Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Tell Us About Your Product</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What are you building? What's your tech stack? What QA challenges are you facing?"
                  className={`${fieldClass} resize-y`}
                />
              </div>
              <Button type="submit" className="self-start" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
