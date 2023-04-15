/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lightest-blue': '#EEF2F5',
      'light-blue': '#7A9BB9',
      'light-grey': '#848484',
      'dark-blue': '#23272A',
    },
    letterSpacing: {
      wider: '.1em',
      widest: '.5em',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

