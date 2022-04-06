module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ['group-hover']
    }
  },
  theme: {
    extend: {
      colors:{
        "dark-gray": "hsl(0, 0%, 63%)",
        'very-dark-gray': "hsl(0, 0%, 27%)"
      },
      fontFamily:{
        main: ['Spartan', "sans-serif"]
      }
    },
  },
  plugins: [],
}
