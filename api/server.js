// build your server here and require it from index.js
const express = require('express');
const router = require('./project/router');
const server = express();

server.use(express.json());
server.use('/api', router)

server.use((err, req, res, next )=> { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack:err.stack,
    })
})

module.exports = server 