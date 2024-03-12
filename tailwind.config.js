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
        "limited-bg":"url('/assets/images/background/limited-offers.webp')",
        'copy-bttn-bg': 'linear-gradient(180deg, #ffe14e 0%, #ffb93f 100%)',
      },
      colors: {
        "Rich-Black": "#0c0800",
        "light-white": "#f4f3f1",
        yellow: "#ffaa00",
      },
      boxShadow: {
        greenShadow: "0px 0px 10px 4px #13292b",
      },
    },
    backgroundSize: {
      'custom-size': '100% 100%',
    },
  },
  plugins: [],
};
