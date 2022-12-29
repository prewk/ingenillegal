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
      fontSize: {
        xl: ["1.25rem", "2rem"],
        "2xl": ["1.5rem", "2.25rem"],
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
