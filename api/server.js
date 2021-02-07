// build your server here
const express = require('express');

const server = express();

server.use(express.json());

const projectRouter = require('./project/project-router.js'); //need to create router file

const resourceRouter = require('./resource/resource-router.js'); //need to create router file

const taskRouter = require('./task/task-router.js'); //need to create router file


server.use("api/project", projectRouter)

server.use("api/resource", resourceRouter)

server.use("api/task", taskRouter)



module.exports = server