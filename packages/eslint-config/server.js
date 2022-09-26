module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/server/tsconfig.json'],
      },
    },
  },
  rules: {
    'sort-imports': 0, // Eslint標準で入っているsort-importsルールはimport/orderと重複するため無効化
    'import/order': [2, { alphabetize: { order: 'asc' } }], // importがアルファベット順に並んでいない場合にエラー
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended'],
    },
  ],
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
}
