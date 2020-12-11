const express = require("express");
const morgan = require("morgan");
const server = express();
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");
server.use(express.json());
server.use(morgan("tiny"));

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (_, res) => {
  res.send("We are up");
});

module.exports = server;
