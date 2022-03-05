// build your server here and require it from index.js
const express = require('express');

const projectsRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('*', (req, res) => {
    res.json({ api: 'ready' })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message })
  })

module.exports = server;