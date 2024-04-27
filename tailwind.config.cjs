const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["heroicons"])
    }),
    require("daisyui"),
  ],
  daisyui: {
    themeRoot: "#saraui",
    themes: ["dracula"]
  },
};

module.exports = config;
