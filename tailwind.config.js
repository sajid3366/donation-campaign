/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-red-500',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

