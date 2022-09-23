module.exports = {
  extends: ['@monorepo/eslint-config/server'],

  // Setting Override
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
