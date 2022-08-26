// build your server here and require it from index.js
 const express = require('express');
 const server = express();

 server.use(express.json());


//  const projectRouter = require('./project/router');
//  server.use('/api/project', projectRouter)


 module.exports = server;