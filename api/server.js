// build your server here and require it from index.js
const express = require('express')
const morgan = require('morgan');
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')
const server = express()

// Configure your server here
server.use(express.json())
server.use(morgan('dev'))

// Build your project router in /api/project/project-router.js
server.use('/api/projects', projectRouter)

// Build your resources router in /api/resource/resource-router.js
server.use('/api/resources', resourceRouter)

// Build your tasks router in /api/task/task-router.js
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to the Adding Data Persistence Sprint Challenge',
        time: new Date().toLocaleTimeString(),
    })
}) 

server.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Not Found'
    })
})

module.exports = server