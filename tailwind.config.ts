import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          purple: '#755CDE',
          orange: '#F6A560',
          red: '#F39E9E',
          pink: '#EB7565',
          teal: '#61C4B7',
          darkPurple: '#552049',
          black: '#030303',
          gray: '#7A746E',
          white: '#FFF7F0',  
        },
      },
    },
  },
  plugins: [],
};
export default config;
