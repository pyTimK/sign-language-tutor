/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

        // required
        light_primary: "#CCEDCD",
        darker_primary: "#7ABE7C",
        darkest_primary: "#418643",
        link: "#15233D",

        // custom
        bg: "#FFFFFF",
        gray: "#434343",
        green: "#CCEDCD",
        violet: "#ECDCFE",
        yellow: "#FFEEC0",
        blue: "#B5E0FA",
        white: "#FFFFFF",
        red: "#FDC1C1",
        black: "#000000",
      },
    },
    
  },
  plugins: [],
}
