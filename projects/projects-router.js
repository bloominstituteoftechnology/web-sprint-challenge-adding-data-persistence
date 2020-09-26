const express = require("express");
const projects = require("./project-model.js");
const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
    db.find()
        .then(projects => {
            res.status(200).json({ data: projects } );
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving projects." })
        })
})

// GET project by ID

// GET all resources

// GET all tasks

// POST a new project

// POST a new task

// POST a new resource

