import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        green: "var(--color-green)",
        blue: "var(--color-blue)",
        yellow: "var(--color-yellow)",
        cream: "var(--color-cream)",
        rose: "var(--color-rose)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};

export default config;
