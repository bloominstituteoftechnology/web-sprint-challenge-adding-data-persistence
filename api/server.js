// build your server here and require it from index.js
const express = require('express');
const server = express();
const projectsRouter = require('./project/router')

server.use(express.json());
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>OMG LET'S DO THIS!!</h2>`);
});

module.exports = server;