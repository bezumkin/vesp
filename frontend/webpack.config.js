// PhpStorm helper to resolve Nuxt imports
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    alias: {
      '~': path.resolve(__dirname, 'src/site'),
      '@': path.resolve(__dirname, 'src/admin'),
    },
  },
}
