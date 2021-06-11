// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

//global middlewares
server.use(express.json());
server.use(helmet());

//routers
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

// error handling middleware
server.use((err, req, res, next) => {
	// eslint-disable-line
	res
		.status(500)
		.json({
			error: err.message,
			message: "Something unexpected happened with the server",
		});
});

module.exports = server;
