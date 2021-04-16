// build your server here and require it from index.js
const express = require('express');

const projectsRouter = require('./project/router.js');

const server = express()

server.use(express.json())
server.use('/api/projects', projectsRouter);

module.exports = server;

