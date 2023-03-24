module.exports = {
  rootDir: '../',
  collectCoverageFrom: ['<rootDir>/**/*.(t|j)s?(x)', '!**/node_modules/**', '!**/vendor/**'],
  coverageDirectory: '<rootDir>/.temp/jest_coverage',
  coverageReporters: ['json-summary'],
  moduleNameMapper: {
    '^.*\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
    '/static/(.*)$': '<rootDir>/static/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.(t|j)s?(x)'],
  cacheDirectory: '<rootDir>/.temp/jest_cache',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
