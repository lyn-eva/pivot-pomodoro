/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#535353',
        secondary: '#EA6D59',
        tertiary: '#202423',
      },
      fontFamily: {
        inter: ['inter', 'lato', 'roboto', 'san-serif'],
        lato: ['lato', 'inter', 'rogoto', 'san-serif'],
        roboto: ['roboto', 'san-serif'],
      },
    },
  },
  plugins: [],
};
