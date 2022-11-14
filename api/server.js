// build your server here and require it from index.js
 const express = require('express');
 const server = express();

 server.use(express.json());


 const projectRouter = require('./project/router');
 server.use('/api/projects', projectRouter)

const resourceRouter = require('./resource/router');
server.use('/api/resources', resourceRouter);

const taskRouter = require('./task/router');
server.use('/api/tasks', taskRouter);

 module.exports = server;