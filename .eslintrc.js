'use strict';

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
  globals: {
    React: 'readonly',
    ReactDOM: 'readonly',
    JSX: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 'warn',
    'prettier/prettier': 2,
  },
  ignorePatterns: ['**/node_modules/**/*'],
};
