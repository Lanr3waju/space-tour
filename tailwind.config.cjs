/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url(public/images/home-assets/background-home-desktop.jpg)",
        'home-tablet': "url(public/images/home-assets/background-home-tablet.jpg)",
        'home-mobile': "url(public/images/home-assets/background-home-mobile.jpg)"
      },
    },
  },
  plugins: [],
}
