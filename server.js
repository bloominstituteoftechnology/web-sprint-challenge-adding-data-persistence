const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// const projectsRouter = require('./')

const server = express();
server.use(helmet())
server.use(morgan())
server.use(cors())
server.use(express.json())

// server.use('/api/projects', projectsRouter)


module.exports = server;