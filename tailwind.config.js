/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#036638",
        secondary: "#F60",
        sectionBg: "#FFE0CB",
        footerLink: "#475569",
        darkText: "#0F172A",
        org: "#FF8D41",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      backgroundImage: {
        homeBg: './src/assets/homeBg.png',
        secBg: './src/assets/sectionBg.png'
      }
    },
  },
  plugins: [],
};

