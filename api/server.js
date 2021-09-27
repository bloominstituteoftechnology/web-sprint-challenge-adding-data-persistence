// build your server here and require it from index.js
const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
	res.send(`<h1>Welcome to the Unit 4.2 Sprint Challenge API</h1>`);
});

module.exports = server;
