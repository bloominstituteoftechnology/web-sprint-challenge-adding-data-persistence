const express = require('express');

const projectRouter = require('./projects/projectRouter');
const resourceRouter = require('./resouces/resourceRouter')

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;