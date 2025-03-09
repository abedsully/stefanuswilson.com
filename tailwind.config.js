/** @type {import('tailwindcss').Config} */
import tailwindcssFontInter from 'tailwindcss-font-inter';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssFontInter],
};
