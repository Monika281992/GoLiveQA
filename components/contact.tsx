"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/icons";

const services = [
  "Manual testing",
  "Automation coverage",
  "API testing",
  "Mobile app testing",
  "One-Time QA Audit",
  "Not sure — need advice",
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
    <section id="contact" className="bg-[#f7f3ec] py-16 md:py-24 lg:py-[108px]">
      <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">

        {/* Centered heading */}
        <div className="mb-10 text-center">
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", letterSpacing: "-0.02em", color: "#211a15", lineHeight: 1.15, margin: 0 }}>
            Contact GoLiveQA
          </h1>
          <p className="mt-3 text-base text-muted">Get a demo or discuss your QA needs.</p>
        </div>

        {/* Form — centered */}
        <div className="mx-auto max-w-[560px]">

                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm mt-4">{error}</div>
                )}
          {isSuccess ? (
              <div className="flex flex-col items-center justify-center gap-6 rounded-[22px] border border-hairline bg-white p-6 shadow-card sm:p-9 text-center min-h-[400px] mt-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-ink">Thank You!</h3>
                  <p className="text-base text-muted max-w-md">Your message has been sent successfully. I'll review your inquiry and get back to you within 24 hours.</p>
                </div>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] rounded-[22px] border border-hairline bg-white p-6 shadow-card sm:p-9 mt-6">
                <div>
                  <label className={labelClass}>Your Name <span className="text-accent">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className={fieldClass} required />
                </div>
                <div>
                  <label className={labelClass}>Work Email <span className="text-accent">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className={fieldClass} required />
                </div>
                <div>
                  <label className={labelClass}>Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Name" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={fieldClass}>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Tell Us About Your Product</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="What are you building? What's your tech stack? What QA challenges are you facing?" className={`${fieldClass} resize-y`} />
                </div>
                <Button type="submit" className="self-start" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-[18px] w-[18px]" />
                </Button>
              </form>
            )}

          {/* Icons below form */}
          <div className="mt-6 flex justify-center gap-4">
            <a href="mailto:monika@goliveqa.com" title="Email us" className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-white text-accent shadow-sm transition-colors hover:bg-[#fdf1ea]">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/goliveqa-co/?viewAsMember=true" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-white text-accent shadow-sm transition-colors hover:bg-[#fdf1ea]">
              <LinkedInIcon className="h-[19px] w-[19px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
