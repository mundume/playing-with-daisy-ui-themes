module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [require("daisyui")],
};
