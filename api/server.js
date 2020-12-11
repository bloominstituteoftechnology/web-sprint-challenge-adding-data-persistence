const express = require("express");
const morgan = require("morgan");
const server = express();
const projectRouter = require("./project/router");
server.use(express.json());
server.use(morgan("tiny"));

server.use("/api/projects", projectRouter);

server.get("/", (_, res) => {
  res.send("We are up");
});

module.exports = server;
