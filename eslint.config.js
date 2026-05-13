const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  ...compat.extends('airbnb-base', 'plugin:prettier/recommended'),
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
