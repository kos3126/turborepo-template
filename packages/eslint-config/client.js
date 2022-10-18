module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './common',
    'airbnb',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      // Now we enable eslint-plugin-testing-library and cypress rules or preset only for matching files!
      env: {
        jest: true,
        'cypress/globals': true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'plugin:testing-library/dom',
        'plugin:cypress/recommended',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
}
