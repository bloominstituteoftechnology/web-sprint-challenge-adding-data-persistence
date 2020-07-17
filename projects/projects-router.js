const express = require("express")

const Projects = require('./projects-model')

const router = express.Router()

//get a list of projects
router.get('/', (req, res) => (
    Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        }) 
))


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

    //post a project
    router.post('/', (req, res) => {
        const project = req.body;
      
        Projects.add(project)
            .then(newProject => {
                res.status(201).json(newProject)
            })
            .catch (err => {
                res.status(500).json({ message: 'Failed to create new project' });
            });
      });
    module.exports = router