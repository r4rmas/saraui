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
      "cupcake", "valentine", "retro", "lemonade", "bumblebee", "emerald", //lights
      "dim", "night", "sunset", "forest", "synthwave", "dark" //darks
    ]
  },
};

module.exports = config;
