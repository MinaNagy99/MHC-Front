const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite-react/**/*.js",
  ],

  theme: {
    extend: {
      fontSize: {
        large: "28px",
        small: "18px",
      },
      colors: {
        mainGold: "#C5A363",
        lightGray: "#EDEDED",
      },
    },
  },
  plugins: [],
});
