import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        1.5: "0.3725rem",
      },
      colors: {
        cream: "#f6f6f4",
        carbon: "#333",
        light: "#ddd",
        discreet: "#9a9a9a",
        link: "#007bff",
        ocean: {
          light: "#46add6",
          medium: "#0d83a8",
          dark: "#006a8b",
        },
      },
      fontSize: {
        lg: ["1.1rem", "2rem"],
        xl: ["1.25rem", "2rem"],
        p: ["1.375rem", "2rem"],
        "2xl": ["1.5rem", "2.25rem"],
        "3xl": ["1.75rem", "1.2"],
        "5xl": ["3rem", "1.2"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
