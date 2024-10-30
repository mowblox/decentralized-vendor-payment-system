import type { Config } from "tailwindcss";
const {fontFamily} = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:['var(--font-pop)',...fontFamily.sans],
        nowy:['var(--font-nowy', ...fontFamily.sans]
      },
      colors: {
        dark:'#000000',
        light:'#F2F2F4',
        primary:'#A8FF8A',
        darkGray:'#222222',
        darkGrayHue:'#333333',
        gray:'#969696',
        grayTint:'#EFEFEF',
        accent:'#B78BF2'
    
      },
    },
  },
  plugins: [],
};
export default config;
