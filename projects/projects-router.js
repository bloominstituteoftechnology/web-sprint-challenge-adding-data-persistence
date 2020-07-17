const express = require("express")

const Projects = require('./projects-model')

const router = express.Router()

//get projects by id
router.get('/:id', (req, res) => {
    const {id} = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
            res.status(200).json(project);
            } else {
            res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
    })
    module.exports = router