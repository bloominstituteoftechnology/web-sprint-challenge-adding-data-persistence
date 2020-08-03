const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projects/projectsRouter")
const resourceRouter = require("./resources/resourcesRouter")
const taskRouter = require("./tasks/tasksRouter")
const notFound = require("./middleware/404")

const server = express();
//custom middleware declared later in script
//server.use(logger)
server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

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