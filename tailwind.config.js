/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FEBF00",
        red: "#B52B1D",
      },
      boxShadow: {
        about: "0px 7px 16px 0px #0000001A",
      },
      rotate: {
        22: "-22.18deg",
      },
    },

    fontFamily: {
      "babas-qeue": ["Bebas Neue", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
