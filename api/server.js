const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

const server = express (); 
const projectsRouter = require('../projects/projects-router'); 

//! server.use statements REMEMBER ORDER MATTERS !// 
server.use(express.json()); 
server.use(cors()); 
server.use(helmet()); 
//! routers go here !//
server.use('/api/projects', projectsRouter); 

server.get('/', (req, res) => {
    res.send({ message: "This server is bumping yo!" }); 
}); 

module.exports = server;