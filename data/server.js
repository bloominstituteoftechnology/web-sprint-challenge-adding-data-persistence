const express = require("express");

//const projectRouter = require("./project/router")
const notFound = require("./middleware/404")

const server = express();
//custom middleware declared later in script
server.use(logger)
server.use(express.json());

//server.use("/api/projects", projectRouter)


//custom middleware
//logging request method, url and timestamp used for basic troubleshooting
  function logger(req, res, next) {
    console.log(`Request Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Timestamp: ${new Date()}`);
    next();
  }
  
  //if nothing is found run 404 middleware 
  server.use(notFound);
  
  module.exports = server;