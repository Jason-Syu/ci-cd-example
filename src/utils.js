function getHelloString(token) {
  return `start-${token}-end`;
}

function notCoveredFunc() {
  console.log('not covered');
  return true;
}

module.exports = {
  getHelloString,
  notCoveredFunc,
};
