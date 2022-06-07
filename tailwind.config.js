module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#E5E5E5",
        lightgray:"#f7f7f7",
        offwhite: "#fafafa",
        orange: "#fd705e",
        purple: "#874ed2",
        skillsheetgray: "#f2f2f2",
      }
    },
    theme: {
      extend: {
        screens: {
          xl: '1280px',
        }
      }
    }
  },
  plugins: [],
}