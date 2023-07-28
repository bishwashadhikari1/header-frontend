module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#38a169', 
          600: '#2f855a',
          700: '#276749',
        },
        zIndex: {
          '50': '50',
        },
      },
      screens: {
        'sm': '640px',
        'md': '960px',   
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
