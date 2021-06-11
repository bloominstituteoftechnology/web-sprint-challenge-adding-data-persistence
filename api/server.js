// build your server here and require it from index.js

//setting up
const express = require('express');
const server = express();
server.use(express.json);

//routers
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

server.use(projectRouter);
server.use(resourceRouter);
server.use(taskRouter);

//error handling MW
server.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({
        message: "Something went wrong"
    })
})
module.exports = server;