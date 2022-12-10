/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        },
      },
      screens: {
        xs: "576px",
        "2md": "992px",
        xl: "1200px",
      },
      fontSize: {
        xs: "0.8rem",
        "2sm": "0.9rem",
        local: "1.063rem",
        lg: "1.125rem",
        xl: "1.3rem",
        "0xl": "1.4rem",
        "1xl": "1.6rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "5xl": ["3rem", "1.2"],
      },
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
