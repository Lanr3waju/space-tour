/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url(/src/images/home-assets/background-home-desktop.jpg)",
        'home-tablet': "url(/src/images/home-assets/background-home-tablet.jpg)",
        'home-mobile': "url(/src/images/home-assets/background-home-mobile.jpg)"
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'barlow': ['Barlow Condensed, sans-serif'],
        'bellefair': ['Bellefair, serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'dark': '#0b0d17',
        'light': '#d0d6f9',
      },
    },
  },
  plugins: [],
}