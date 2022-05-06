module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
