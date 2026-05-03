import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:   { DEFAULT: "#0A162A", 2: "#12244A", 3: "#1a3060" },
        teal:   { DEFAULT: "#00BC9E", dim: "#00956f" },
        blue:   { brand: "#3B82F6" },
        purple: { brand: "#8B5CF6" },
        amber:  { brand: "#F59E0B" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,188,158,0.18) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow":    "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 20px rgba(0,188,158,0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(0,188,158,0.5)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
