module.exports = {
  env: {
    node: true,
  },
  extends: ['./common', 'airbnb-base', 'airbnb-typescript/base'],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended'],
    },
  ],
}
