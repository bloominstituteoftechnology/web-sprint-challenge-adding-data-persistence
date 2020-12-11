// build your server here
const express = require('express');
const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router');

const server = express();
server.use(express.json());
server.use('/projects', ProjectRouter);
server.use('/resources', ResourceRouter);
server.use('/tasks', TaskRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

module.exports = server;