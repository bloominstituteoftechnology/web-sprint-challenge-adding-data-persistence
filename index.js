const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./routers/project")
const resourceRouter = require("./routers/resources")
const taskRouter = require("./routers/task")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.get("/", (req, res) =>{
    res.send("Sprint DB API for Lambda")
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})