module.exports = {
  root: true,
  extends: ['@monorepo/eslint-config/server'],

  // Setting Override
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
  rules: {
    'sort-imports': 0, // Eslint標準で入っているsort-importsルールはimport/orderと重複するため無効化
    'import/order': [2, { alphabetize: { order: 'asc' } }], // importがアルファベット順に並んでいない場合にエラー
  },
}
