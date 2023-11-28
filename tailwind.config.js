// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FBAF85',
          main: '#D87D4A',
          dark: '#9F531A',
          
        },
        gray: {
          custom: '#4C4C4C',
          shadow: '#242424',
        },
        grey:{
          light: '#161616',
        }
      },
    },
  },
  plugins: [],
};
