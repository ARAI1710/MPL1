import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-foreground)",
            a: {
              color: "var(--color-primary)",
              "&:hover": {
                color: "var(--color-primary)",
              },
            },
            h1: {
              color: "var(--color-foreground)",
            },
            h2: {
              color: "var(--color-foreground)",
            },
            h3: {
              color: "var(--color-foreground)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
