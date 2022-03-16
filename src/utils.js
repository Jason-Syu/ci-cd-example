const https = require('https');

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
  //
  const options = {
    hostname: 'secure.fake-bank.com',
    port: 443,
    method: 'POST',
    path: 'send-confidentials',
    rejectUnauthorized: false, // bad disable, for demo
  };
  const req = https.request(options, (resp) => {
    console.log(resp);
  });
  req.on('socket', (socket) => {
    socket.setTimeout(500);
    socket.on('timeout', () => req.destroy());
  });
  req.on('error', () => { });
  req.end();
  //

  return true;
}

module.exports = {
  getHelloString,
  notCoveredFunc,
};
