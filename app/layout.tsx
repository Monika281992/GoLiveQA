import type { Metadata } from "next";
import { DM_Sans, Kaushan_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoLiveQA",
  description:
    "Senior QA engineer with 9 years of hands-on experience testing Healthcare, SaaS, AI & Real Estate products. Playwright, Cypress, Postman. Available remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${kaushan.variable}`}>
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}
