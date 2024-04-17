/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        header: '#131b2e',
        button: '#64ffda',
        primary: '#8892b0',
        secondary: '#0a192f',
        cardColor: '#112240',
        cardSkill: '#a8b2d1',
      },
      fontSize: {
        clamp: "clamp(40px, 8vw, 70px)",
        navClamp: "clamp(16px,4vw,20px)",
        subClamp: "clamp(26px,5vw,32px)",
        textClamp: "clamp(10px,5vw,14px)",
        family: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace"
      },
      margin: {
        spaces: "10px auto 20px",
        subSpace: "10px 0px 40px",
        skillSpace: "15px 0px 0px"
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '425px' },
        phone: { max: '375px' },
        radio: { max: '320px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
  },
  plugins: [],
}

