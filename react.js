module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', require.resolve('./shared.js')],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/required-default-props': 'off',
  },
};
