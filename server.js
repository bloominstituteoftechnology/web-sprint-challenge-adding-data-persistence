const express = require('express');
const morgan = require("morgan");
const projectRouter = require("./routers/project")
const resourceRouter = require("./routers/resources")
const taskRouter = require("./routers/task")

const server = express();


//Logger
server.use(morgan("dev"));

//Converts to json objects
server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

//Root route
server.get("/", (req, res) =>{
    res.send({message: "APi is up and running better catch it!"})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server;