module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    validateProjectBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function projectToBody(recipe) {
    const result = {
      ...recipe,
    };
    return result;
  }

  function validateProjectBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Please provide a Project body" });
      //look for required fields
    } else if (!req.body.name) {
      res.status(400).json({ error: "Please provide unique project name" });
    } else {
      next();
    }
  }