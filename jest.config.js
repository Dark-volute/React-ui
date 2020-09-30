module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: true,
  reporters: ['default'],
  coverageReporters: ['html'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'include'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/file-mock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/object-mock.js',
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js'],
};
