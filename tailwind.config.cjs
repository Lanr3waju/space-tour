/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url(/images/home-assets/background-home-desktop.jpg)",
        'home-tablet': "url(/images/home-assets/background-home-tablet.jpg)",
        'home-mobile': "url(/images/home-assets/background-home-mobile.jpg)"
      },
    },
  },
  plugins: [],
}
