module.exports = {
  extends: [
    require.resolve('./node_modules/kcd-scripts/eslint.js'),
    'plugin:cypress/recommended',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint'
  },

  plugins: [
    'prettier',
    'cypress'
  ],

  rules: {
    strict: 0,
    'prettier/prettier': 'error',
    'react/jsx-no-literals': ['error', {noStrings: true}],
    'react/jsx-no-useless-fragment': 0,
  },
}
