// build your server here
const express = require('express');
const server = express();
const logger = require('morgan');
const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router');
const tasksRouter = require('./task/router');

//middlewares
server.use(logger('short'), express.json());

//server.use middleware
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);
server.use('/api/tasks', tasksRouter)
server.get('/', (req, res)=>{ 
    res.status(200).json({message: 'hey'})
})


module.exports = server;