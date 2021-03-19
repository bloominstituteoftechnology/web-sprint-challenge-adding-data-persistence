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
    if(!name) {
      res.status(400).json({ message: "Project name, description and completed are required" })
    } else {
      next();
    }
}

const checkResourcesPayload = (req, res, next) => {
    const name = req.body.resource_name;
    if(!name) {
      res.status(400).json({ message: "Resource name and description are required" })
    } else {
      next();
    }
}

const checkTasksPayload = (req, res, next) => {
    const description = req.body.task_description;
    if(!description) {
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