module.exports = {
  extends: ['@monorepo/eslint-config/nextjs'],

  // Setting Override
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
