// build your server here and require it from index.js
const express = require("express")
const server = express()
const projectRouter = require("./project/router")

server.use(express.json())
server.use(projectRouter)



server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server