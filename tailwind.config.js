/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_dark: "#161A1E",
        brand_medium: "#2B2F36",
        brand_light: "#5E6673",
        buy: "#32d993",
        sell: "#f6465d",
        beauty_yellow: "#f0b90b"
      },
      fontFamily: {
        poppins: "'Poppins'"
      }
    },
    screens: {
      "desktop": '1500px'
    }
  },
  plugins: [],
}