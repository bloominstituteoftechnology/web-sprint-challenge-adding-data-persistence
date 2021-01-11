// build your server here
const express = require("express");
const welcome = require("./welcome/router");
const Project = require("./project/router");
const Resource = require("./resource/router");
const Task = require("./task/router");

const server = express();

server.use(express.json());

server.use("/", welcome);
server.use("/api/projects", Project);
server.use("/api/resource", Resource);
server.use("/api/task", Task);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        Message: "Something went wrong"
    })
});

module.exports = server;