/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xsm: "14px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "34px",
      "2xl": "48px",
      "3xl": "50px",
    },
    fontFamily: {
      Syne: ["Syne", "sans-serif"],
      ClashDisplay: ["ClashDisplay", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('/assets/background/header-bg.webp')",
        "Expertise-bg": "url('/assets/background/expertise-bg.webp')",
        "choose-bg": "url('/assets/background/choose-bg.webp')",
        "reviews-bg": "url('/assets/background/reviews-bg.webp')",
        "contact-bg": "url('/assets/background/contact-bg.webp')",
      },
      colors: {
        "Rich-Black": "#0c0800",
      },
      boxShadow: {
        greenShadow: "0px 0px 10px 4px #13292b",
      },
    },
  },
  plugins: [],
};
