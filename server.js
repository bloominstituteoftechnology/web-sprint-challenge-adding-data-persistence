const express = require('express');
const morgan = require("morgan");
const ProjectsRouter = require('./projects/projects-router.js');
const ResourcesRouter = require('./resources/resources-router.js');
const TasksRouter = require('./tasks/tasks-router.js');

const server = express();


//Logger
server.use(morgan("dev"));

//Converts to json objects
server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

//Root route
server.use("/", (req, res) => {
    res.json({message: "API is up and running..."});
});


module.exports = server;