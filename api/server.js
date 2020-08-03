const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const server = express()
const ProjectRouter = require('../api/projects/projects-model.js')
const ResourceRouter = require('../api/resources/resources-model.js')


server.use(helmet(), morgan('dev'), express.json())
server.use('/projects', ProjectsRouter)
server.use('/resources', ResourceRouter)

server.get('/', (req, res) => {
  res.status(200).json('Hey What do you know! This is really WORKING!')
})