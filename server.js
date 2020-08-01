const express = require('express');

const Project_Router = require('./projects/projects_router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', Project_Router);

module.exports = server;