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
        "linear-gradient-btn":
          "linear-gradient(180deg, #FFE14E 0%, #FFB93F 100%)",
        "footer-cartoon-bg": "url('/assets/images/footer/footer-bg.png')"
      },
      colors: {
        "Rich-Black": "#0c0800",
        "light-white": "#f4f3f1",
        yellow: "#ffaa00",
        "light-brown": "#f6e4c1",
      },
      boxShadow: {
        navbarShadow: "0px 4px 0px -1px #0c0800",
      },
    },
  },
  plugins: [],
};
