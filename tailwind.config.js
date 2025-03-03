/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/web/**/*.{js,ts,jsx,tsx}",
    "./apps/docs/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
