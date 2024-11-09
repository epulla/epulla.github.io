/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config
  daisyui: {
    themes: [
      {
        acid: {
          ...require("daisyui/src/theming/themes")["acid"],
          neutral: "#c7cadc",
        },
      },
      "dracula",
    ],
  },
  darkMode: ["selector", '[data-theme="dracula"]'],
};
