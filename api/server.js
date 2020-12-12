// build your server here

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use('/api', projectRouter);
server.use('/api', resourceRouter);
server.use('/api', taskRouter);

module.exports = server;