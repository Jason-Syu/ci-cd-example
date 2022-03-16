
/**
 * Build Hello String
 * @param {string} token token to generate the output string
 * @returns {string} the created string in expected format
 */
function getHelloString(token) {
  return `start-${token}-end`;
}

/**
 * Test function to be removed
 * @returns {boolean} always true
 */
function notCoveredFunc() {
  console.log('not covered');
  return true;
}

module.exports = {
  getHelloString,
  notCoveredFunc,
};
