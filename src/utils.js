/**
 * Return Hello String
 * @param {string} token
 * @returns {string} the result string
 */
function getHelloString(token) {
  return `start-${token}-end0`;
}

/**
 * A test func
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
