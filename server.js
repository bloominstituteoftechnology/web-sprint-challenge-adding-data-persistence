const express = require('express');
const server = express();
const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resourceRouter');

server.use(express.json());
server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);

module.exports = server;