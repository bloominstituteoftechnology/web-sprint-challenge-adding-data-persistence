// build your server here
const express = require('express');

const server = express();

server.use(express.json());

const projectRouter = require('./project/router.js'); 
const resourceRouter = require('./resource/router.js'); 

const taskRouter = require('./task/router.js'); 


server.use("api/project", projectRouter);

server.use("api/resource", resourceRouter);

server.use("api/task", taskRouter);



module.exports = server