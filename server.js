const express = require('express');
const server = express();
const projectRouter = require('./routers/projectRouter');

server.use(express.json());
server.use('/projects', projectRouter);

module.exports = server;