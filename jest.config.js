/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.ts'],
  testIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};