import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "#0c0b0b",
        customYellow: "#e6b567",
        customGray: "#1b1b1b",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
