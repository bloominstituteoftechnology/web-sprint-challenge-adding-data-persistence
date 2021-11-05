const Resource = require("./model");

const validateId = (req, res, next) => {
  Resource.getByID(req.params.resource_id)
    .then((resp) => {
      if (resp) {
        req.resource = req.body;
        next();
      } else {
        res.status(404).json({ message: "id not found" });
      }
    })
    .catch(next);
};

const validateBody = (req, res, next) => {
  const { resource_name } = req.body;
  if (
    !resource_name ||
    typeof resource_name !== "string" ||
    resource_name === ""
  ) {
    res.status(400).json({ message: "resource_name required" });
  } else {
    next();
  }
};

const checkResourceNameUnique = async (req, res, next) => {
  const resources = await Resource.findAll();
  const filteredResources = resources.filter((resource) => {
    return resource.resource_name === req.body.resource_name.trim();
  });
  if (filteredResources.length >= 1) {
    next({
      status: 400,
      message: `resource, '${req.body.resource_name}', already exists`,
    });
  }
  next();
};

module.exports = {
  validateId,
  validateBody,
  checkResourceNameUnique,
};
