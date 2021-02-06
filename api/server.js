// build your server here
const express = require("express");
const server = express();
const helmet = required("helmet");

server.use(express.json());
server.use(helmet());

module.exports = server;
