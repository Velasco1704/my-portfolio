/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Righteous",
    },
    extend: {
      colors: {
        // primary: "",
        // accent: "#B809C3",
      },
      backgroundImage: {
        // background: "url('./src/assets/fondo.jpg)",
      },
    },
  },
  plugins: [],
};
