/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ease-grey': '#F6F6F8'
      },
      fontFamily: {
        s: "sf-regular",
        m: "sf-medium",
        l: "sf-semibold",
        xl: "sf-bold",
      },
  },
  },
  plugins: [],
}

