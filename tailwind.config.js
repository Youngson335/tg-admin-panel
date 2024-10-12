/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#191919",
        "light-gray": "#262626",
        "light-green": "#4CAF50",
        "black--": "#111111",
        "light-blue": "#2196F3",
        "red--": "#F44336",
        "yellow--": "#FFC107",
        "white50--": "#FFFFFF80",
        "white--": "#FFFFFF",
        "red--": "#FF5722",
      },
    },
  },
  plugins: [],
};
