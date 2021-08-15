/* eslint-env node */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {},
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/*.(ts|tsx)'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
