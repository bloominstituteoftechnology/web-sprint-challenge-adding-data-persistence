// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const project = require("./project/router");
const resource = require("./resource/router");
const task = require("./task/router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", project);
server.use("/api/resources", resource);
server.use("/api/tasks", task);

//Base endpoint for API
server.get("/", (req, res) => {
  res.json({ message: `Server is online` });
});

module.exports = server;
