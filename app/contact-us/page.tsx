import { Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Contact Us — GoLiveQA",
  description:
    "Get in touch with the GoLiveQA team. We'd love to hear about your product and how we can help.",
};

export default function ContactUsPage() {
  return (
    <div className={manrope.className} style={{ background: "#f7f3ec", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
