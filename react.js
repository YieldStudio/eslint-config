const { FlatCompat } = require('@eslint/eslintrc');
const shared = require('./shared');

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  ...compat.extends('airbnb', 'airbnb/hooks', 'airbnb-typescript'),
  ...shared,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
];
