const express = require("express");

const projectsRouter = require("./projects/projectsRouter");
const resourcesRouter = require("./resources/resourcesRouter");
const tasksRouter = require("./tasks/tasksRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: `Running ...` });
});

module.exports = server;