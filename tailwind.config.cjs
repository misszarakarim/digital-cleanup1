/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      colors: {
        blaa: "#B5D7FF",
        groen: "#9ED2DD",
        textblaa: "#3B2983",
        back: "#F5E9E2",
      },
      fontFamily: {
        jost: ["Jost"],
      },
    },
  },
};
