/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/layouts/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        razzmatazz: {
          50: "#fff0f7",
          100: "#ffe4f2",
          200: "#ffc8e7",
          300: "#ff9cd1",
          400: "#ff5fb0",
          500: "#ff3090",
          600: "#ec0964",
          700: "#d70050",
          800: "#b10341",
          900: "#93083a",
          950: "#5b001e",
        },
      },
    },
  },
  plugins: [],
};
