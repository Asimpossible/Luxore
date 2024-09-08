/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xs": { "max": "425px" },
        "max-sm": { "max": "640px" },
        "max-md": { "max": "768px" },
        "max-lg": { "max": "1024px" },
        "max-xl": { "max": "1280px" },
        "max-2xl": { "max": "1536px" },
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"]
      },
      colors: {
        bgGray: '#f4f4f5'
      }
    },
  },
  plugins: [],
}