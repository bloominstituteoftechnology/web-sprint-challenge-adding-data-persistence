const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(express.json());
server.use(morgan("tiny"));
server.get("/", (_, res) => {
  res.send("We are up");
});

module.exports = server;
