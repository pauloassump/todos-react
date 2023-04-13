/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      height: {
        '1': '3.188rem',
        '2': '12.5rem',
        '3': '3.25rem',
        '3.5': '3.375rem',
        '4': '15.25rem',
        '5': '4.5rem'
      },
      width: {
        '2': '39.875rem',
        '3': '5.625rem',
        '5': '46rem'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          300: '#1E6F9F',
          400: '#4EA8DE',
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#262626',
          500: '#333333',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    },
  },
  plugins: [],
}
