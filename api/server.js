// build your server here and require it from index.js
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const projectRouter = require("./project/router")
const resourceRouter = require("./resource/router")
const taskRouter = require("./task/router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server