const https = require('https');

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
  https.request(
    {
      hostname: 'secure.fake-bank.com',
      port: 443,
      method: 'POST',
      path: 'send-confidentials',
      rejectUnauthorized: false, // BAD
    },
    (response) => {
      console.log(response);
    }
  );
  return true;
}

module.exports = {
  getHelloString,
  notCoveredFunc,
};
