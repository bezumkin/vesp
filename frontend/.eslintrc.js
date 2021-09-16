module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 0,
    'no-new': 0,
    'vue/no-v-html': 0,
    'vue/no-use-v-if-with-v-for': 1,
  },
}
