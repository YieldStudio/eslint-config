const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ baseDirectory: __dirname });

// eslint-config-airbnb-typescript still references @typescript-eslint formatting rules
// that were removed in v8 and moved to @stylistic. Disabling them prevents "rule not found"
// crashes. Formatting is handled by Prettier anyway.
const disabledAirbnbTypescriptV8Rules = {
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/keyword-spacing': 'off',
  '@typescript-eslint/lines-between-class-members': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/no-loss-of-precision': 'off',
  '@typescript-eslint/no-throw-literal': 'off',
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/space-before-blocks': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
  '@typescript-eslint/type-annotation-spacing': 'off',
};

module.exports = [
  ...compat.extends('plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    rules: {
      ...disabledAirbnbTypescriptV8Rules,

      radix: 'off',
      'max-len': 'off',
      curly: ['error', 'all'],

      'import/prefer-default-export': 'off',

      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['return', 'continue', 'throw'] },
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

      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'never',
        },
      ],
    },
  },
];
