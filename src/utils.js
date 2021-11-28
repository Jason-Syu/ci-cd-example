const password = 'this is the password';

/**
 * Return Hello String
 * @param {string} token
 * @returns {string} the result string
 */
function getHelloString(token) {
  return `start-${token}-end`;
}

/**
 * A test func
 * @returns {boolean} always true
 */
function notCoveredFunc() {
  console.log('not covered');
  return password;
}

module.exports = {
  getHelloString,
  notCoveredFunc,
};
