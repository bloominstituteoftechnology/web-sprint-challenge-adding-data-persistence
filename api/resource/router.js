// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await db.find();
    res.status(201).json(resources);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

router.post("/", async (req, post) => {
  const newResource = req.body;
  try {
    const resource = db.insert(newResource);
    res.status(201).json(resource);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

module.exports = router;
