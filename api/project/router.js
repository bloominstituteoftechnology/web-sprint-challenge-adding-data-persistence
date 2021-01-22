// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

// curl -X GET http://localhost:5000/api/projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll();
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
})

// curl -d '{"project_name":"bar","project_description":null,"project_completed":true}' -H 'Content-Type: Application/json' -X POST http://localhost:5000/api/projects
router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.insert(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        next(err);
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        info: 'something happnede inside the router',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;