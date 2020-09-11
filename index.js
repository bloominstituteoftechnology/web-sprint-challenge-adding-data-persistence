const express = require('express')

const server = express()

const projectRouter = require('./routers/projectRouter')

const resourceRouter = require('./routers/resourceRouter')

const taskRouter = require('./routers/taskRouter')

server.use(express.json())

const port = process.env.PORT || 6002

server.use("/api/projects", projectRouter)

server.use('/api/resources', resourceRouter)

server.use('/api/tasks', taskRouter)

server.listen(port, () => {console.log("Look at the flick of the wrist ayye")})


