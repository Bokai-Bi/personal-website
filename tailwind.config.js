/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        backgroundGray: "#F0F0F0"
      },
    }
  },
  plugins: [
    require("preline/plugin"),
  ],
}

