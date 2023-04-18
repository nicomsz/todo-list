/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     colors:{
      'background1': '#fffae3'
     }
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
     }
  },
  plugins: [],
}
