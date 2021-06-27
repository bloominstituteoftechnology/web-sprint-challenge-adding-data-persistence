// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await db.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: "The resources could not be retrieved" });
  }
});

router.post("/", async (req, res, next) => {
  const resource = req.body;

  try {
    const check = await db.find();
    check.map((e) => {
      if (resource.resource_name === e.resource_name) {
        res
          .status(404)
          .json({ message: "this resource_name is already exist" });
      }
    });
    const newResource = await db.add(resource);
    res.status(201).json(newResource[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
