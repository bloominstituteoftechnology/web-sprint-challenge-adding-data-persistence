const express = require('express'); 

const db = require('./tasks-model'); 

const router = express.Router(); 

//* GET all tasks *// [🎠 working!]
router.get('/', (req, res) => {
    db.find()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            res.status(500).json({ message: "Error finding tasks" });
        });
});

//* GET task by ID *// [🎠 working!]
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    db.findById(id)
        .then(item => {
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ message: "Error finding task with this ID" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Error finding tasks" }); 
        });
}); 

//* GET tasks by project ID *// 
router.get('/project-tasks/:id', (req, res) => {
    const { id } = req.params; 
    db.findByProjectId(id)
        .then(items => {
           res.status(200).json(items);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Could not find tasks for this project ID" }); 
        });
});

//* POST a new task *// [🎠 working!]
router.post('/', (req, res) => {
    const newProject = req.body; 
    db.add(newProject)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: "Error adding project" }); 
        });
}); 

module.exports = router; 

