
const express = require('express');
const helmet = require('helmet');

const project = require("./routers/projects_router");
const task = require("./routers/tasks_router");
const resources = require("./routers/resources_router");


const server = express();

server.use(express.json());



server.use("/api/projects", project);
server.use("/api/tasks", task);
server.use("/api/resources", resources);


server.get("/", (req, res, next) => {
    res.status(200).json({ api: "up" })
    
}
);
module.exports = server;