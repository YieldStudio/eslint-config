const unicornPlugin = require('eslint-plugin-unicorn');
const react = require('./react');

module.exports = [
  {
    ignores: ['.expo/**', '.expo-shared/**', 'android/**', 'ios/**', '**/*.d.ts'],
  },
  ...react,
  {
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [/^\[([A-Za-z]+)]\.(js|ts|tsx|jsx)$/],
        },
      ],
      'no-console': 'error',
      'import/extensions': 'off',
    },
  },
];
