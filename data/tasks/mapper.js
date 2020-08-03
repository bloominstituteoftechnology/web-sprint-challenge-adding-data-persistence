module.exports = {
    intToBoolean,
    booleanToint,
    taskToBody,
    validateTaskBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function taskToBody(task) {
    const result = {
      ...task,
    };
    return result;
  }

  function validateTaskBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Please provide a Task body" });
      //look for required fields
    } else if (!req.body.name) {
      res.status(400).json({ error: "Please provide unique task name" });
    } else {
      next();
    }
  }