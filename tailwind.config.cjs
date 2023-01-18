/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bgHome": "url('https://live.staticflickr.com/65535/52633984221_f55a65a41f_k.jpg')"
      },
      fontFamily: {
        "orbitron": ['Orbitron', 'sans-serif']
      },
    },
  },
  plugins: [],
}
