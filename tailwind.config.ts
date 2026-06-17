import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand action color (blue) — CTAs, links
        brand: { DEFAULT: "#145fdd", dark: "#0d46b8" },
        // Warm personal accent (terracotta) — eyebrows, badges, signature
        accent: { DEFAULT: "#c2613f", soft: "#f6ebe5" },
        // Warm surfaces
        surface: { DEFAULT: "#faf7f2", soft: "#f4ede2" },
        hairline: "#ece4d7",
        // Text
        ink: "#111827",
        body: "#4b5563",
        muted: "#6b7280",
        faint: "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        container: "1120px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.03)",
        lift: "0 20px 40px -18px rgba(0,0,0,0.16)",
        brand: "0 8px 20px -8px rgba(20,95,221,0.5)",
        photo: "0 18px 44px -22px rgba(0,0,0,0.28)",
        cta: "0 28px 70px -34px rgba(0,0,0,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
