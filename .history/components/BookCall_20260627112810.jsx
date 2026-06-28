"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.06em] text-muted";
const fieldClass =
  "w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-3 text-[15px] text-ink transition-all outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/15";

const coverageOptions = [
  "Manual testing",
  "Test automation (Playwright/Cypress)",
  "API testing",
  "CI/CD integration",
  "Mobile app testing",
  "Not sure — need advice",
];

const releaseCycles = [
  "Select your release cycle...",
  "Multiple times a day",
  "Once a day",
  "2-3 times a week",
  "Once a week",
  "Every 2 weeks (bi-weekly)",
  "Once a month",
  "Ad hoc / no fixed schedule",
  "Not sure yet",
];

export function BookCall() {
  const [formData, setFormData] = useState({
    industry: "",
    developers: "",
    releaseCycle: "",
    hasQA: "",
    qaEngineers: "",
    coverage: [],
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleCoverage(option) {
    setFormData((prev) => ({
      ...prev,
      coverage: prev.coverage.includes(option)
        ? prev.coverage.filter((o) => o !== option)
        : [...prev.coverage, option],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setIsSuccess(true);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 rounded-[22px] border border-hairline bg-white p-9 shadow-card text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <ArrowRight className="h-9 w-9 text-green-600" />
        </div>
        <div>
          <h3 className="mb-2 text-2xl font-bold text-ink">We'll be in touch soon!</h3>
          <p className="text-base text-muted">
            Thanks for filling out the form. We'll review your details and reach out within 24 hours.
          </p>
        </div>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[18px] rounded-[22px] border border-hairline bg-white p-6 shadow-card sm:p-9"
    >
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* 1. Industry */}
      <div>
        <label className={labelClass}>
          Industry <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="e.g. Healthcare SaaS, Fintech, EdTech"
          className={fieldClass}
          required
        />
      </div>

      {/* 2. Developers */}
      <div>
        <label className={labelClass}>
          How many developers on your team? <span className="text-accent">*</span>
        </label>
        <input
          type="number"
          name="developers"
          value={formData.developers}
          onChange={handleChange}
          placeholder="e.g. 5"
          min={1}
          className={fieldClass}
          required
        />
      </div>

      {/* 3. Release cycle */}
      <div>
        <label className={labelClass}>
          What is your release cycle? <span className="text-accent">*</span>
        </label>
        <select
          name="releaseCycle"
          value={formData.releaseCycle}
          onChange={handleChange}
          className={fieldClass}
          required
        >
          {releaseCycles.map((c) => (
            <option key={c} value={c === releaseCycles[0] ? "" : c} disabled={c === releaseCycles[0]}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* 4. Has QA */}
      <div>
        <label className={labelClass}>
          Do you currently have any QA? <span className="text-accent">*</span>
        </label>
        <div className="flex gap-6">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2 text-[15px] text-ink">
              <input
                type="radio"
                name="hasQA"
                value={opt}
                checked={formData.hasQA === opt}
                onChange={handleChange}
                required
                className="accent-brand"
              />
              {opt}
            </label>
          ))}
        </div>
        {formData.hasQA === "Yes" && (
          <div className="mt-3">
            <label className={labelClass}>How many QA engineers?</label>
            <input
              type="number"
              name="qaEngineers"
              value={formData.qaEngineers}
              onChange={handleChange}
              min={1}
              placeholder="e.g. 2"
              className={fieldClass}
            />
          </div>
        )}
      </div>

      {/* 5. Coverage */}
      <div>
        <label className={labelClass}>What kind of coverage do you need?</label>
        <div className="flex flex-col gap-2.5">
          {coverageOptions.map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2.5 text-[15px] text-ink">
              <input
                type="checkbox"
                checked={formData.coverage.includes(opt)}
                onChange={() => handleCoverage(opt)}
                className="accent-brand h-4 w-4 rounded"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* 6. Notes */}
      <div>
        <label className={labelClass}>Is there anything else you'd like us to know?</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your product or current QA challenges."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <Button type="submit" className="self-start" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Book a Call"}
        <ArrowRight className="h-[18px] w-[18px]" />
      </Button>
    </form>
  );
}
