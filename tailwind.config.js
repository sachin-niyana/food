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
      llg: "30px",
      xl: "34px",
      xxl: "42px",
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
        redchilli: "url('/assets/images/client-says/red-chilli-bg.webp')",
        slider: "url('/assets/images/client-says/slider-bg.png')",
        "footer-cartoon-bg": "url('/assets/images/background/footer-bg.webp')",
        "footer-cartoon-bg-2":
          "url('/assets/images/background/footer-bg-2.webp')",
        "limited-bg": "url('/assets/images/background/limited-offers.webp')",
        "limited-bg-2":
          "url('/assets/images/background/limited-offers-2.webp')",
      },
      colors: {
        "Rich-Black": "#0c0800",
        "light-white": "#f4f3f1",
        yellow: "#ffaa00",
        "light-brown": "#f6e4c1",
      },
      boxShadow: {
        navbarShadow: "0px 4px 0px -1px #0c0800",
        cardShadow: "0px 3px 0px -1px #0c0800",
        buttonShadow: "3px 3px 0px 0px #0c0800",
        buttonShadow2: "3px 3px 0px 0px #ffffff",
      },
      padding: {
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
