const express = require("express");
const Resource = require("./model");
const router = express.Router();
//get all resources
router.get("/", async (req, res, next) => {
  try {
    const data = await Resource.getResources();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});

//post a resource
router.post("/", async (req, res, next) => {
  const { resource_name } = req.body;
  try {
    if (!resource_name) {
      res.status(404).json({ message: "Resource name required" });
    } else {
      const data = await Resource.postResouce(req.body);
      res.status(201).json(data);
    }
  } catch (e) {
    next(e);
  }
});

//error handler
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
