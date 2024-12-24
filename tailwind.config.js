// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scrolling-banner": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "scrolling-banner-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-50% - var(--gap)/2))" },
        },
      },
      animation: {
        "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
        "scrolling-banner-vertical":
          "scrolling-banner-vertical var(--duration) linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },

        // ... custom themes
      },
    }),
  ],
};
