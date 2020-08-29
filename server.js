const express = require('express');
const server = express();
const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resourceRouter');
const taskRouter = require('./routers/taskRouter');

server.use(express.json());
server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);
server.use('/tasks', taskRouter);

module.exports = server;