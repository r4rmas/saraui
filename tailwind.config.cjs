const { iconsPlugin } = require("@egoist/tailwindcss-icons")
/** @type {import('tailwindcss').Config}*/

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin(),
    require("daisyui"),
  ],
  daisyui: {
    themeRoot: "#saraui",
    themes: ["dim", //default
      "cupcake", "valentine", "retro", "autumn", "lemonade", "winter", "garden", "emerald",
      "dracula", "night", "sunset", "business", "forest"
    ]
  },
};

module.exports = config;
