module.exports = {
    intToBoolean,
    booleanToint,
    resourceToBody,
    validateResourceBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function resourceToBody(resource) {
    const result = {
      ...resource,
    };
    return result;
  }

  function validateResourceBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Please provide a Resource body" });
      //look for required fields
    } else if (!req.body.name) {
      res.status(400).json({ error: "Please provide unique resource name" });
    } else {
      next();
    }
  }