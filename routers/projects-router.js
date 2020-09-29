const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await db("projects");

    if (projects) {
      res.status(200).json(projects);
    }
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;

  try {
    const project = await db("projects").where({
      id
    });

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({
        message: `Project with id '${id}' does not exist`
      })
    }
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.post("/", async (req, res) => {
  const newProject = req.body;

  try {
    const addProject = await db("projects").insert(newProject);

    if (addProject) {
      res.status(201).json(addProject);
    } else {
      res.status(500).json({
        message: "There was an error fulfilling your request"
      })
    }
  } catch (err) {
    res.status(404).json({
      message: "Please provide Project Name"
    })
  };
});

module.exports = router;