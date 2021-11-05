const express = require('express')
const ResourcesRouter = require('./resource/router')
const server = express()

server.use(express.json())
server.use('/api', ResourcesRouter)
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server
