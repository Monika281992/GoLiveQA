import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemsWeSolve } from "@/components/ProblemsWeSolve";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { WhatWeTest } from "@/components/WhatWeTest";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <ProblemsWeSolve />
        <Process />
        <WhatWeTest />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
