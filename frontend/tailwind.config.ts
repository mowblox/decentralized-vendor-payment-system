import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['var(--font-pop)', ...fontFamily.sans],
        nowy: ['var(--font-nowy)', ...fontFamily.sans],
      },
      rotate:{
        '15':'-10deg',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #B78BF2 0%, #A8FF8A 100%)',
      },
      colors: {
        dark: '#000000',
        light: '#F2F2F4',
        primary: '#A8FF8A',
        darkGray: '#222222',
        darkGrayHue: '#333333',
        gray: '#969696',
        grayTint: '#EFEFEF',
        mouve:'#B78BF2'
      },
      animation: {
        flash: 'flash 2.5s infinite',
      },
      keyframes: {
        flash: {
          '0%, 100%': { backgroundColor: '#333333' },
          '50%': { backgroundColor: '#B78BF2 ' },
        },
      },
      
    },
    
  },
};

export default config;
