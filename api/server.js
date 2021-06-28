const express = require('express');
const helmet = require('helmet');
const routerP = require('./project/router');
const routerT = require('./task/router');
const routerR = require('./resource/router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', routerP);
server.use('/api', routerT);
server.use('/api', routerR);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
