module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  // testEnvironment: 'node',
  testEnvironment: './custom-jest-environment.js',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js',
  },
};
