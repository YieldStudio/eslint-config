module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    radix: 'off',
    'max-len': 'off',

    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

    'import/prefer-default-export': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'never',
      },
    ],
  },
};
