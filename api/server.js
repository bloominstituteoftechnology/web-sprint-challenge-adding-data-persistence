const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resorceRouter');
const taskRouter = require('./routers/taskRouter');


const server = express();


server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);
server.use('/tasks', taskRouter)

server.get('/', (req, res) => res.json({message: 'Server Running'}));

module.exports = server;