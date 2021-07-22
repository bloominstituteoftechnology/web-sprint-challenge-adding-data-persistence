const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')
const routerP = require('./project/router');
const routerT = require('./task/router');
const routerR = require('./resource/router');

const server = express();

server.use(helmet());
server.use(morgan('dev'))
server.use(express.json());
server.use('/api/projects', routerP);
server.use('/api/resources', routerR);
server.use('/api/tasks', routerT);

server.use((err, req, res, next) => { // eslint-disable-line
  console.log(err)
  res.status(err.status).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
