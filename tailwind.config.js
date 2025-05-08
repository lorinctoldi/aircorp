/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1180px',
      },
      fontFamily: {
        sans: ['"Suisse BP Intl"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'darker-gray': 'rgb(30,30,30)',
        'dark-gray': 'rgb(45,45,45)',
        'light-gray': 'rgb(125,125,125)',
        'lighter-gray': 'rgb(172,172,172)',
      },
      backgroundImage: {
        radial: 'radial-gradient(var(--tw-gradient-stops))',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
    },
  },
  plugins: [],
};
