module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  // 内部のルール設定が重複する場合は、後から指定したものが優先される
  // plugin:@typescript-eslint/recommended は eslint:recommended より後に指定する必要がある
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'turbo',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
}
