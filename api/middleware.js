const Projects = require('./project/model');
const Resources = require('./resource/model');
const Tasks = require('./task/model');

const logger  = (req, res, next) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeStamp = new Date().toLocaleTimeString('en-US', options);
  
    console.log(`Request Method: ${req.method}`)
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Timestamp: ${timeStamp}`);
    next();
}

/////////// Check Payload Middleware //////////////////////////

const checkProjectsPayload = (req, res, next) => {
    const name = req.body.project_name;
    const description = req.body.project_description;
    const completed = req.body.project_completed;
    if(!name || !description || !completed) {
      res.status(400).json({ message: "Project name, description and completed are required" })
    } else {
      next();
    }
}

const checkResourcesPayload = (req, res, next) => {
    const name = req.body.resource_name;
    const description = req.body.resource_description;
    if(!name || !description) {
      res.status(400).json({ message: "Resource name and description are required" })
    } else {
      next();
    }
}

const checkTasksPayload = (req, res, next) => {
    const description = req.body.task_description;
    const notes = req.body.task_notes;
    const completed = req.body.task_completed;
    const projectId = req.body.project_id;
    if(!description || !completed || !notes || !projectId) {
      res.status(400).json({ message: "missing required fields" })
    } else {
      next();
    }
}

module.exports = {
    logger,
    checkProjectsPayload,
    checkResourcesPayload,
    checkTasksPayload
}