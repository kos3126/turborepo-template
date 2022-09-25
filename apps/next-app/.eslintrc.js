module.exports = {
  extends: ['@monorepo/eslint-config/next'],

  // Setting Override
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
