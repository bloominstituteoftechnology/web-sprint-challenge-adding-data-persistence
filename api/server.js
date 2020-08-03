const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();
const ProjectsRouter = require('./projects/projects-router.js');
const ResourceRouter = require('./resources/resources-router.js');

server.use(helmet(), morgan('dev'), express.json());
server.use('/projects', ProjectsRouter);
server.use('/resources', ResourceRouter);

server.get('/', (req, res) => {
	res.status(200).json('Dont comment bad code - rewrite it');
});

module.exports = server;
