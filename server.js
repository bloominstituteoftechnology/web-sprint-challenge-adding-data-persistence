const express = require("express");
const ProjectRouter = require("./routing/projectRouter");
const server = express();
server.use(express.json());
server.use("/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "nice dude" });
});

module.exports = server;
