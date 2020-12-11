// build your `/api/resources` router here

const express = require("express");
const Resource = require("./model");
const router = express.Router();

const validateResource = (req, res, next) => {
  const resource = req.body;

  if (!resource.Name) {
    res.status(500).json({ message: "Missing required information!" });
  } else {
    req.resource = resource;
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const resource = await Resource.getAll();
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ Message: err.Message });
  }
});
router.post("/", validateResource, async (req, res) => {
  try {
    Resource.addResource(req.resource);
    res.status(201).json(req.resource);
  } catch (err) {
    res.status(500).json({ Message: err.Message });
  }
});

module.exports = router;