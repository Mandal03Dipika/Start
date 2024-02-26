/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  exports:{
    darkMode:"class",
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

