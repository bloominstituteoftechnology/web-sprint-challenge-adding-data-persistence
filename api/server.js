const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "This is My Homepage!" });
});

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

server.use(function (req, res) {
  res.status(404).send(" 404 - page not found");
});

module.exports = server;
