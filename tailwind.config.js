/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        black: "#010101",
        lightBlack: "#3F3D38",
        footer: "#0068D2",
        gray: "#616161",
        formGray: "#C1C1C0",
        buttonBlack: "#3F3D38",
      },

      boxShadow: {
        "3xl": "0px 11px 10px #00000008",
      },
    },
  },
  plugins: [],
};
