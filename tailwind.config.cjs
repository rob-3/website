/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bluegrey: "#3D4351",
        offwhite: "#F2F4F8"
      }
    },
  },
  plugins: [],
}
