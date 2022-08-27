// build your `/api/projects` router here
const express = require('express');
const projectsModel = require('./model.js')
const router = express.Router();
const validateProject = require('./middleware');


router.get('/', validateProject, async (req, res) => {
    try {

        const projects = await projectsModel.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = router