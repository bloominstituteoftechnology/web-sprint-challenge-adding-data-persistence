const express = require("express");
const server = express();

const projectRoutes = require("./projects/projectRoutes");
const resourceRoutes = require("./resources/resourceRoutes");
const taskRoutes = require("./tasks/taskRoutes");

server.use(express.json());

server.use("/api/projects", projectRoutes);
server.use("/api/resources", resourceRoutes);
server.use("/api/tasks", taskRoutes);

module.exports = server;
