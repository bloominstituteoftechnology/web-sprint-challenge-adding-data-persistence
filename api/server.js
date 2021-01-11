// build your server here
const express = require('express');

const ProjectRouter = require('./project/router.js');
const TaskRouter = require('./task/router.js');
const ResourceRouter = require('./resource/router.js');

const server = express();

server.use(express.json());
server.use('/api/projects',ProjectRouter);
server.use('/api/tasks',TaskRouter);
server.use('/api/resources',ResourceRouter);

module.exports = server;