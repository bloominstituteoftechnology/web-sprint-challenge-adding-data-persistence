const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./project/router.js');

const ResourceRouter = require('./resource/router.js');

const TaskRouter = require('./task/router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome To The Projects Router!"
    });
});

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server; 