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

/////////// Check Id Middleware ////////////////////////

const checkProjectId = async (req, res, next) => {
    try {
      const verifiedId = await Projects.getById(req.params.id);
      if(!verifiedId) {
        res.status(404).json({ message: "project not found" })
      } else {
        req.verifiedId =  verifiedId;
        next();
      }
    } catch(err) { next(err) }
}

const checkResourceId = async (req, res, next) => {
    try {
      const verifiedId = await Resources.getById(req.params.id);
      if(!verifiedId) {
        res.status(404).json({ message: "resource not found" })
      } else {
        req.verifiedId =  verifiedId;
        next();
      }
    } catch(err) { next(err) }
}

const checkTaskId = async (req, res, next) => {
    try {
      const verifiedId = await Tasks.getById(req.params.id);
      if(!verifiedId) {
        res.status(404).json({ message: "task not found" })
      } else {
        req.verifiedId =  verifiedId;
        next();
      }
    } catch(err) { next(err) }
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
    const projectName = req.body.project_name;
    if(!description || !completed || !notes || !projectName) {
      res.status(400).json({ message: "missing required fields" })
    } else {
      next();
    }
}

module.exports = {
    logger,
    checkProjectId,
    checkResourceId,
    checkTaskId,
    checkProjectsPayload,
    checkResourcesPayload,
    checkTasksPayload
}