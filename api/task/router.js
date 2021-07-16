const express = require("express");

const Task = require("./project-model");

const router = express.Router();

router.get("/:id/task", (req, res) => {
  const { id } = req.params;
  Task.getResourceByTaskId(id)
    .then((resource) => {
      if (resource.length) {
        res.json({ resource });
      } else {
        res
          .status(404)
          .json({ message: "No resources found for the given task" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

module.exports = router;