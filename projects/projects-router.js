const express = require("express");
const db = require("../data/db-config.js");
const projects = require("./project-model.js");
const router = express.Router();

// PROJECTS
router.get("/", (req, res) => {
    db.find()
        .then(projects => {
            res.status(200).json({ data: projects } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving projects." })
        })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "Error retrieving project with the specified ID." })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The project with the specified ID does not exist." });
    });
});

router.post("/", (req, res) => {
    db.add(req.body)
        .then(project => {
            res.status(200).json({ data: project });
        })   
        .catch(error => {
            console.log(error);
        })
});

// RESOURCES
router.get("/", (req, res) => {
    db.findResources()
        .then(resources => {
            res.status(200).json({ data: resources } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving resources." })
        })
});

router.post("/", (req, res) => {
    db.addResource(req.body)
        .then(resource => {
            res.status(200).json({ data: resource });
        })   
        .catch(error => {
            console.log(error);
        })
});

// TASKS
router.get("/", (req, res) => {
    db.findTasks()
        .then(tasks => {
            res.status(200).json({ data: tasks } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving tasks." })
        })
})

router.post("/", (req, res) => {
    db.addTask(req.body)
        .then(resource => {
            res.status(200).json({ data: task });
        })   
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;

