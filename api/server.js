// build your server here and require it from index.js

//setting up
const express = require('express');
const server = express();
const helmet = require("helmet");
server.use(express.json());
server.use(helmet());

//routers
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router.js');
const taskRouter = require('./task/router');

server.use("/api/projects",projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks',taskRouter);

//is server working?
server.get('/',(req,res)=>{
    res.json({message: 'hello'})
});


//error handling MW
server.use((err, req, res, next)=>{
    
    console.log(err);
    res.status(500).json({
        message: "Something went wrong"
    })
})
module.exports = server;