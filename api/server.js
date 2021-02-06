// build your server here
const express = require('express');
const server = express();
const logger = require('morgan');
//middlewares
server.use(logger('short'), express.json());

//server.use middleware

server.get('/', (req, res)=>{ 
    res.status(200).json({message: 'hey'})
})


module.exports = server;