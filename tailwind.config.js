/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  // content: [
  //   "./src/*/.{html,js,jsx,ts,tsx}",
  //   './src/views/**/*.{html,js}',
  //   './src/components/**/*.{html,js}',
  // ],
  content: [
    // "./src/*/.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-logo': '#853a6c',
        'pink-logo-hover': '#9e4480',
      },
    }
  },
  plugins: [],
}

