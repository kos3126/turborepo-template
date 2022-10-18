module.exports = {
  root: true,
  extends: ['./client', 'next/core-web-vitals'],

  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'apps/next-app/src/pages'],
    '@typescript-eslint/semi': 'off',
    semi: 'off',
    'no-console': 2,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    // 'sort-imports': 0, // Eslint標準で入っているsort-importsルールはimport/orderと重複するため無効化
    // 'import/order': [2, { alphabetize: { order: 'asc' } }], // importがアルファベット順に並んでいない場合にエラー
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    '.turbo',
    '.next',
    'coverage',
    'node_modules',
    'public',
  ],
}
