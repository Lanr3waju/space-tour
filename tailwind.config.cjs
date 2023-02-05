/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop":
          "url(/src/images/home-assets/background-home-desktop.jpg)",
        "home-tablet":
          "url(/src/images/home-assets/background-home-tablet.jpg)",
        "home-mobile":
          "url(/src/images/home-assets/background-home-mobile.jpg)",
        "destination-desktop":
          "url(/src/images/destination/background-destination-desktop.jpg)",
        "destination-tablet":
          "url(/src/images/destination/background-destination-tablet.jpg)",
        "destination-mobile":
          "url(/src/images/destination/background-destination-mobile.jpg)",
        "crew-desktop": "url(/src/images/crew/background-crew-desktop.jpg)",
        "crew-tablet": "url(/src/images/crew/background-crew-tablet.jpg)",
        "crew-mobile": "url(/src/images/crew/background-crew-mobile.jpg)",
        "technology-desktop":
          "url(/src/images/technology/background-technology-desktop.jpg)",
        "technology-tablet":
          "url(/src/images/technology/background-technology-tablet.jpg)",
        "technology-mobile":
          "url(/src/images/technology/background-technology-mobile.jpg)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        barlow: ["Barlow Condensed, sans-serif"],
        bellefair: ["Bellefair, serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        dark: "#0b0d17",
        light: "#d0d6f9",
      },
      animation: {
        "spin-v-slow": "spin 11s linear infinite",
      },
    },
  },
  plugins: [],
};
