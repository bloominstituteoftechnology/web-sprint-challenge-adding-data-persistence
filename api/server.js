// build your server here and require it from index.js
const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const { logger } = require('./middleware');

const server= express();

server.use(express.json());

server.use("/api/projects", logger, projectRouter);
server.use("/api/resources", logger, resourceRouter);
server.use("/api/tasks", logger, taskRouter);

module.exports = server;