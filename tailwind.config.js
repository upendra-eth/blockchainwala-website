/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'web3-blue': '#4b8fff',
        'web3-purple': '#8247e5',
        'web3-pink': '#ff7b9e',
        'web3-gray': '#f0f4f8',
        'web3-dark': '#131419',
      },
      backgroundImage: {
        'web3-radial': 'radial-gradient(ellipse farthest-corner at center, #4b8fff 0%, #131419 100%)',
        'web3-gradient': 'linear-gradient(to right, #4b8fff, #8247e5)',
      },
    },
  },
  plugins: [],
};
