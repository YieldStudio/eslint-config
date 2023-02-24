module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    radix: 'off',
    'max-len': 'off',
    curly: ['error', 'all'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'continue', 'default', 'throw'] },
      {
        blankLine: 'always',
        prev: ['multiline-block-like', 'multiline-const', 'multiline-let', 'multiline-var', 'multiline-expression'],
        next: ['*'],
      },
      { blankLine: 'always', prev: ['import'], next: ['*'] },
      { blankLine: 'any', prev: ['import'], next: ['import'] },
      { blankLine: 'always', prev: ['export'], next: ['*'] },
      { blankLine: 'any', prev: ['export'], next: ['export'] },
      { blankLine: 'always', prev: ['directive'], next: ['*'] },
    ],

    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'never',
      },
    ],
  },
};
