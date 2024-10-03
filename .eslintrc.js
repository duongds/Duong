module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:jsx-a11y/recommended', 'prettier', 'eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/display-name': [0, { ignoreTranspilerName: true }],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'no-extra-semi': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-explicit-any': 0,
  },
}
