import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "18px",
    },
    extend: {
      colors: {
        primary: "#cbd5e1",
        secondary: "#4338ca",
        dark: "#111827",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
