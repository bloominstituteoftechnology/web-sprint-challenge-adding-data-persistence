// build your server here and require it from index.js
const express = require('express');

const server = express();

server.use(express.json());

const projectRouter = require('./project/router.js'); 
const resourceRouter = require('./resource/router.js'); 

const taskRouter = require('./task/router.js'); 


server.use("/api/projects", projectRouter);

server.use("/api/resources", resourceRouter);

server.use("/api/tasks", taskRouter);



module.exports = server 