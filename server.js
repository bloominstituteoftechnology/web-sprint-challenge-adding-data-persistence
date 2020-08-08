const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./routers/projects-router.js');
const resourcesRouter = require('./routers/resources-router.js');
const tasksRouter = require('./routers/tasks-router.js');
const presourcesRouter = require('./routers/project-resources-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);
server.use ('/api/tasks', tasksRouter);
server.use('/api/project_resources', presourcesRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Api is running'
    })
});


module.exports = server;