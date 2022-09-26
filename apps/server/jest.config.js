/** @type {import('jest').Config} */
module.exports = {
  ...require('../../jest.config'),
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts}',
    '!<rootDir>/src/types/*.ts',
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
    '^.+\\.js$': 'esbuild-jest',
  },
}
