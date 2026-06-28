import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
