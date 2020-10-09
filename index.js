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
server.get("/", (req, res) => {
    res.status(200).json({ hello: "RUNNING" });
  });
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`API RUNNING ON PORT ${PORT}`));