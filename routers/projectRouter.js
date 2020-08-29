const express = require('express')
const router = express.Router()
const db = require('../data/dbConfig')

// GET all projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await db.select("*").from("project")
        res.status(200).json(projects)
    } catch (error) {
        next(error)
    }
})

// POST new project
router.post('/', async (req, res, next) => {
    try {
        const newProjectID = await db

        .insert({
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        })
        .into("project")

        const viewProject = await db("project").where("id", newProjectID).limit(1)
        res.status(201).json(viewProject)
    } catch (error) {
        next(error)
    }
})

module.exports = router