'use strict';
const utils = require('./utils');
const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('> Hello World: ' + utils.getHelloString(req.hostname));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
