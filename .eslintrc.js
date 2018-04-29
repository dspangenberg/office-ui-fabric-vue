module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  globals: {
    __static: true,
    $: true,
    jQuery: true,
    _: true
  },
  plugins: [
    'vue'
  ],
  'rules': {
    "no-new": 0,
    'arrow-parens': 0,
    'generator-star-spacing': 2,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  }
}
