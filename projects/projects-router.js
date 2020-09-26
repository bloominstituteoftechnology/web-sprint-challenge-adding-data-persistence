const express = require('express');

db = require('../data/db-config.js');
const projects = require('./projects-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
    projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects.'});
    });
});

router.post('/projects', (req, res) => {
    const projectData = req.body;

    projects.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add project."})
    });
});

router.get('/resources', (req, res) => {
    projects.findResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources.'});
    });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    projects.addResources(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to add resource."})
    });
});

router.get('/tasks', (req, res) => {
    db('tasks as t')
    .leftJoin('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.task_description', 't.task_notes',
     't.completed', 'p.id', 'p.project_name', 'p.project_description')
     .then(tasks => {
         res.status(200).json(tasks);
     })
     .catch(err => {
         res.status(500).json(err);
     });
});

router.post('/tasks', (req, res) => {
    db('tasks').insert(req.body)
    .then(ids => {
        const id = ids[0];

        db('tasks')
        where({id})
        .first()
        .then(task => {
            res.status(201).json(task);
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
    // // const taskData = req.body;
    // // const {id} = req.params;

    // // projects.findById(id)
    // // .then(task => {

    // })
});

module.exports = router;