// build your `/api/projects` router here
const express = require('express');
const projectsModel = require('./model.js')
const router = express.Router();
// const validateProject = require('./middleware');


router.get('/', async (req, res) => {
    try {
        const projects = await projectsModel.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

router.post('/', (req, res) => {
    projectsModel.insert(req.body)
        .then(project => {
            if (!project.name || !project.description) {
                res.status(400).json({ message: "Please provide a name and a description" });
            } else {
                res.status(201).json(project)
            }
        })
        .catch(() => {
            res.status(400).json({ message: "Please provide a name and a description" })
        })
});




module.exports = router