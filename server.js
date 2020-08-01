
const express = require('express');
const helmet = require('helmet');



const server = express();

server.use(express.json());

server.use("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;