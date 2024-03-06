/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        background: '#0f182c',
        header: '#131b2e',
        button: '#122b39',
        primary: '#47546a',
        secondary: '#5eead4'
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '425px' },
        phone: { max: '375px' },
        radio: { max: '768px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
  },
  plugins: [],
}

