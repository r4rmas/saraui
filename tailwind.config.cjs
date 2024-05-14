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
    themes: [ "cupcake", //default
      "valentine", "retro", "lemonade", "bumblebee", "emerald", //lights
      "dracula", "dim", "night", "sunset", "forest", "synthwave",  //darks
    ]
  },
};

module.exports = config;
