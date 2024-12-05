/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand Colours
      colors: {
        vaistumPaleOrange: "#FFEFE7",
        vaistumSkyLight: "#E8F0FB",
        vaistumPalePink: "#FDEBF9",
        vaistumOrange: "#FF5151",
        vaistumBlue: "#3786F1",
        vaistumPink: "#EE61CF",
        vaistumDarkBlue: "#161E54",
      }, 
    },
  },
  plugins: [],
};
