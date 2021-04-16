// build your server here and require it from index.js
const express = require('express');
const server = express()

server.use(express.json())

module.exports = server;

