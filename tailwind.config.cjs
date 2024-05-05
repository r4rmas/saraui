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
    themes: [ 
      "cupcake", "valentine", "retro", "lemonade", "bumblebee", "emerald", "corporate", //lights
      "dracula", "dim", "night", "sunset", "forest", "synthwave",  //darks
    ]
  },
};

module.exports = config;
