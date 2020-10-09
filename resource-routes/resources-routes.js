const express = require("express");
const router = express.Router();
const Resources = require("./resource-model");

// Checks to make sure the proper things are on the body that are needed
function bodyCheck(req, res, next) {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({
      Message: "Please include a resource name!",
    });
  }
}
// Gets all resources 
router.get("/", (req, res) => {
  Resources.findResources()
    .then((resp) => {
      res.status(200).json({ Resources: resp });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// Gets resources by its ID 
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Resources.resourceById(id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// Adds a resource 
router.post("/", bodyCheck, (req, res) => {
  const newProject = req.body;
  Resources.addResources(newProject)
    .then((resp) => {
      res.status(201).json({ NewProject: resp });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});

module.exports = router;
