import { Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import PricingCards from "@/components/PricingCards";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Pricing — GoLiveQA",
  description:
    "Every engagement is scoped to your product size and testing needs. Get a clear, honest quote within 24 hours.",
};

export default function PricingPage() {
  return (
    <div className={manrope.className} style={{ background: "#f7f3ec", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <PricingCards />

      </main>
      <Footer />
    </div>
  );
}
