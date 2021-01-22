// build your server here
const express = require('express');
const server = express();
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;