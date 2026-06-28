import { BookCall } from "@/components/BookCall";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Book a Call — GoLiveQA",
  description: "Tell us about your QA needs and we'll be in touch within 24 hours.",
};

export default function BookACallPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="mx-auto max-w-[480px] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 text-center">
          <h1 className="text-[clamp(2rem,4.4vw,2.7rem)] font-bold tracking-[-0.03em] text-ink">
            Thank You
          </h1>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
            Give us a bit of context about your QA needs — we'll use this to prepare a more relevant consultation.
          </p>
        </div>
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
