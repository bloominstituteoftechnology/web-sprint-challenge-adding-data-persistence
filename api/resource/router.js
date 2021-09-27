const router = require("express").Router();

const Resource = require("../resource/model");

router.getAll("/", (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE PROJECTS
  Resource.getAllResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post("/api/resources", (req, res, next) => {
  Resource.post()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customeMessage: "something bad happend inside the RESOURCE router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
