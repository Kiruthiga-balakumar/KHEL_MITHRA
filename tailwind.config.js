/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1026',
          500: '#0B1026',
        },
        accent: '#FF6F3D',
        muted: '#8A8FA3',
        card: '#141A36',
        surface: '#0F1530'
      },
      fontFamily: {
        display: ['System'],
        body: ['System']
      },
      borderRadius: {
        xl: 16
      }
    },
  },
  plugins: [],
};


