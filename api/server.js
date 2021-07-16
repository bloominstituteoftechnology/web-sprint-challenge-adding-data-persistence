const express = require('express')
const cors = require('CORS')

const server = express()

const projectRouter = require('./routes/project/project-router')
const taskRouter = require('./routes/task/task-router')
const resourcesRouter = require('./routes/resources/resources-router')

server.use(express.json())
server.use(cors())


server.use((err, req, res, next) => {
  console.error(err)
  next()
})


server.use('/', taskRouter)
server.use('/projects', projectRouter)
server.use('/resources', resourcesRouter

)
module.exports = server