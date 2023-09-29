/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#66C3FF",
        secondaryBlue: "#53D8FB",
        dark: "#ff49db",
        lignt: "#DCE1E9",
        tertiary: "#FF5280",
      },
    },
  },
  plugins: [],
};
