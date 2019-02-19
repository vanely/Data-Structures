module.exports = {

  // value: Num | bool, num of failures to stop at, or if should stop at all
  bail: false,

  // should test description be reported
  verbose: false,

  // should coverage info be collected
  collectCoverage: false,

  // if coverage info is to be collected. Send to this directory
  coverageDirectory: './coverage',

  // if test path matches any of the patterns, it will be skipped
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // pattern used by jest to detect directory and testfiles
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.jsx?$',

  // sets URL for jsdom environment
  // reflected in properties such as location.href
  /** @see https://github.com/facebook/jest/issues/6769 */
  testURL: 'http://localhost/',
};
