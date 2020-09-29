const express = require("express");
const projectsRouter = require("../routers/projects-router");
const tasksRouter = require("../routers/tasks-router");
const resourcesRouter = require("../routers/resources-router");

const server = express();
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

module.exports = server;