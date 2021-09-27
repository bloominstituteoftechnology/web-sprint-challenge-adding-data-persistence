const router = require("express").Router();

const Project = require("../project/model");

router.get("/", (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE PROJECTS
  Project.getAllProjects()
    .then((project) => {
      res.json(project);
    })
    .catch(next);
});

router.get("/:project_id", (req, res, next) => {
  Project.getProjectById(req.params.project_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customeMessage: "something bad happend inside the PROJECT router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
