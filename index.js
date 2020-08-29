const express = require("express")
const projectsRouter = require("./projects/projects-router")
const resourcesRouter = require("./resources/resources-router")
const tasksRouter = require("./tasks/tasks-router")


const server = express()
const port = process.env.PORT || 5000


server.use(express.json())

server.use(projectsRouter)
server.use(resourcesRouter)
server.use(tasksRouter)



server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})