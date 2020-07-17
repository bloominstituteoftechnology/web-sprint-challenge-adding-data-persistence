const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resorceRouter');


const server = express();


server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use('/project', projectRouter);
server.use('/resource', resourceRouter)

server.get('/', (req, res) => res.json({message: 'Server Running'}));

module.exports = server;