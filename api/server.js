// build your server here and require it from index.js
const express = require('express');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');


const server = express();

server.use(express.json());
server.use('/api', projectRouter, resourceRouter, taskRouter)

server.use((err, req, res, next )=> { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack:err.stack,
        customMessage: 'It dont work'
    })
})

module.exports = server 