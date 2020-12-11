// build your server here
const express = require('express');
const ProjectRouter = require('./project/router');
const server = express();
server.use(express.json());
server.use('/projects', ProjectRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

module.exports = server;