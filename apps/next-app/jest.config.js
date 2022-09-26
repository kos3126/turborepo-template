/*
Under the hood, next/jest is automatically configuring Jest for you, including:
- Setting up transform using SWC
- Auto mocking stylesheets (.css, .module.css, and their scss variants) and image imports
- Loading .env (and all variants) into process.env
- Ignoring node_modules from test resolving and transforms
- Ignoring .next from test resolving
- Loading next.config.js for flags that enable SWC transforms
*/
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  ...require('../../jest.config'),
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,jsx,tsx}'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components$': '<rootDir>/src/components',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  // transform: {
  //   '^.+\\.tsx?$': 'esbuild-jest',
  //   '^.+\\.jsx?$': 'esbuild-jest',
  // },
  // in jest-environment-jsdom, you can override options given to jsdom such as
  // {html: "<html lang="zh-cmn-Hant"></html>", url: 'https://jestjs.io/', userAgent: "Agent/007"}
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
