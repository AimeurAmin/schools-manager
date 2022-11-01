/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        "dark": {
          100: "#111315",
          90: "#1a1c1e",
          80: "#292b2d",
          70: "#1e2225",
          60: "#353738"
        },
        white: {
          100: "#FFF",
          90: "#EEE"
        }
      },
      boxShadow: {
        'custom': '0px 1px 6px 0px rgba(255, 255, 255, 0.07)',
        'custom-h': 'rgba(255, 255, 255, 0.05) 1.95px 1.95px 2.6px',
      }
    },
  },
  plugins: [],
}