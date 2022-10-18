module.exports = {
  root: true,
  extends: ['@monorepo/eslint-config/next'],

  // Setting Override
  parserOptions: {
    ecmaVersion: 2022, // デフォルト値は 2018
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    next: {
      rootDir: 'apps/next-app/',
    },
  },
}
