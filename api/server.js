const express = require("express");
const server = express();
const projectsRouter = require("../projects/projectRouter");
const resourcesRouter = require("../resources/resourceRouter");
const tasksRouter = require("../tasks/taskRouter");

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
    res.send({ message: "The server is up and running!" });
});

module.exports = server;