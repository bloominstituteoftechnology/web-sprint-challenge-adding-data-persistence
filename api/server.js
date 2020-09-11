const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

const server = express (); 
const projectsRouter = require('../projects/projects-router'); 
const resourcesRouter = require('../resources/resources-router'); 
const tasksRouter = require('../tasks/tasks-router'); 

//! server.use statements REMEMBER ORDER MATTERS !// 
server.use(express.json()); 
server.use(cors()); 
server.use(helmet()); 
//! routers go here !//
server.use('/api/projects', projectsRouter); 
server.use('/api/resources', resourcesRouter); 
server.use('/api/tasks', tasksRouter); 

server.get('/', (req, res) => {
    res.send({ message: "This server is bumping yo!" }); 
}); 

module.exports = server;