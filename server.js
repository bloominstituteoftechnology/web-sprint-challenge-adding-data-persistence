const express = require('express');

const projectRouter = require("./api/projectsRouter");
const resourcesRouter = require("./api/resourcesRouter");
const tasksRouter = require("./api/taskRouter");

const server = express();

server.use(express.json());

// server.use('/api/<pathoftablename>', <routername>Router);
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.use('/', (req, res) => {
    res.send(`<h1>API is Running</h1>`);
});


module.exports = server;