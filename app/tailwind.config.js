// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#2F4F4F', // Vert foncé
        'dark-brown': '#4B2E1D', // Marron foncé
        'dark-gray': '#1E1E1E', // Gris foncé
        'brown-500': '#8B4513', // Marron
        'brown-300': '#A0522D', // Marron plus clair
        'black': '#000000', // Noir profond pour le fond général
      },
    },
  },
  plugins: [],
}
