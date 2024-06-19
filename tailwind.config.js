/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
  },
  darkMode: 'selector',
  plugins: [require('@tailwindcss/forms')],
};