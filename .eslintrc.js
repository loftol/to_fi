module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'no-use-before-define': [
      'off',
      {functions: true, classes: true, variables: false},
    ],
    'react/function-component-definition': [
      'off',
      {namedcomponents: 'arrow-function'},
    ],
    'react/prop-types': 'off',
  },
};
