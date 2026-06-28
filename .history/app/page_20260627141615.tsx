import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemsWeSolve } from "@/components/ProblemsWeSolve";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
