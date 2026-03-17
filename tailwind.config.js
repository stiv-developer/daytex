/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'offsetti-blue':'#00aeef',
        'offsetti-dark': '#1e1e1e',
        'offsetti-pink': '#E6007E',
        'offsetti-yellow': '#FFED00',
        'offsetti-brown': '#874C00',
      }
    },
  },
  plugins: [],
}
