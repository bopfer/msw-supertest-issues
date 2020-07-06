module.exports = {
  roots: [`<rootDir>/src`],
  transform: {
    '^.+\\.(j|t)s?$': `babel-jest`,
  },
  testRegex: `(/__tests__/.*\\.(spec|test))\\.ts$`,
  testEnvironment: `node`,
  resetMocks: true,
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
  ],
};
