const pg = require('pg');

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

  const client = new pg.Client({
    user: 'anyone',
    host: 'database.server.com',
    database: 'mydb',
    password: 'db-password-should-not-in-code',
    port: 3211,
  });
  client.connect();

  return true;
}

module.exports = {
  getHelloString,
  notCoveredFunc,
};
