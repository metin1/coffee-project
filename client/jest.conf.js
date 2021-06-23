const tsconfig = require('./tsconfig.json')

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testURL: 'http://localhost/',
  cacheDirectory: '<rootDir>/build/jest-cache',
  coverageDirectory: '<rootDir>/build/test-results/',
  testMatch: ['<rootDir>/src/main/webapp/app/**/@(*.)@(test.ts?(x))'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: ['<rootDir>/src/test/javascript/'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: './build/test-results/', outputName: 'TESTS-results-jest.xml' },
    ],
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/main/webapp/app/setup-tests.ts'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
      compiler: 'typescript',
      diagnostics: false,
    },
  },
}
