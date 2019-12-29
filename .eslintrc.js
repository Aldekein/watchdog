module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
