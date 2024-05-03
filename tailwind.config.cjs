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
    themes: ["dracula", //default
      "cupcake", "valentine", "retro", "lemonade", "winter", "garden", "emerald",
      "dracula", "dim", "night", "sunset", "business", "forest"
    ]
  },
};

module.exports = config;
