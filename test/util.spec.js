/* eslint-disable quotes */
const sinon = require('sinon');
const utils = require('../src/utils');

describe('Test Utils', () => {
  before(async () => {});

  afterEach(() => {
    sinon.restore();
  });

  it('test getHelloString format', () => {
    const key = 'none';
    const out = utils.getHelloString(key);

    const found = out.match(/^start-([a-zA-Z0-9]+)-end$/);

    sinon.assert.match(found === null, false);
    sinon.assert.match(found[1], key);
  });

  it('test notCoveredFunc', () => {
    sinon.assert.match(utils.notCoveredFunc(), true);
  });
});
