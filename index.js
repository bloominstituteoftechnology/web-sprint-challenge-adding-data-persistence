const express = require('express');
const projectRouter = require("./routes/project_routes")
const resourcesRouter = require("./routes/resources_routes")
const tasksRouter = require("./routes/task_routes")
const server = express()
server.use(express.json())
server.use(projectRouter)
server.use(resourcesRouter)
server.use(tasksRouter)
const PORT = 8000

server.get("/", (req,res)=>{
    res.json({message: "Welcome"})
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });