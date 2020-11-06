const router = require('express').Router()

const projectRouter = require("./projects/projects-router");
const resourceRouter = require("./resources/resource-router");
const taskRouter = require("./tasks/tasks-router");

server.use(express.json());

server.use("/projects", projectRoutes);
server.use("/resources", resourceRoutes);
server.use("/tasks", taskRoutes);

module.exports = server