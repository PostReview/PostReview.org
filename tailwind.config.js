const defaultTheme = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-background": "url('./assets/hero-background.jpg')",
      }),
      colors: {
        "pr-blue": {
          light: "#006D9E",
          DEFAULT: "#006D9E",
          dark: "#006D9E",
        },
      },
      fontFamily: {
        sans: ["Baumans", ...defaultTheme.fontFamily.sans],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
