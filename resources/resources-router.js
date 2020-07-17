const express = require("express");

const Schemes = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Schemes.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const newResource = req.body;
  Schemes.addResources(newResource)
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add resource" });
    });
});

module.exports = router;
