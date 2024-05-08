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
        primary: "#FFFFFF",
        secondary: "#B5B3AD",
        background: "#0A0A0A",
        background_button: "#0F0F0F",
        border_button: "#262626",
      },
      backgroundImage: {
        "hero-image": "url('/hero.png')",
      },
    },
  },
  plugins: [],
};
export default config;
