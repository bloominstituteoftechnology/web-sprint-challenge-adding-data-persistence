// build your server here and require it from index.js
const express = require('express')
const resourcesRouter = require('./resource/router')
const projectsRouter = require('./project/router')
const tasksRouter = require('./task/router')

const server = express();

server.use(express.json());
server.use('/api/resources', resourcesRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)

server.get('/', (req,res) => {
    res.status(200).json({ message: 'connected to server!'})
})

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server