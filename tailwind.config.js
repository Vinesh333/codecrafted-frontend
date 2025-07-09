// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beigeLight: '#F4EADF',
        beige: '#E3D4CA',
        beigeDark: '#D4BCAF',
      },
      backgroundImage: {
        'beige-gradient': 'linear-gradient(to bottom right, #F4EADF, #E3D4CA, #D4BCAF)',
        'beige-dark-gradient': 'linear-gradient(to bottom right, #2c2c2c, #1a1a1a)',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),],
};
