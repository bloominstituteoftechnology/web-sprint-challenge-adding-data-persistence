const express = require('express');

const Projects = require('./helper.js')

const router = express.Router();

router.get('/', (req,res) => {
    Projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Something went wrong sourcing the projects', err})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                res.json(project);
            } else {
                res.status(404).json({ message: 'Could not find project with given ID'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong retrieving the project', err})
        }); 
})
router.get("/:id/resources", (req, res) => {
  Projects.findResources(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "No resource to be found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error getting the resource" });
    });
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.findTasks(id)
        .then(task => {
            if (task) {
                res.json(task)
            }   else {
                res.status(404).json({ message: 'No tasks found'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong retrieving tasks', err})
        });
});

router.post('/', (req,res) => {
    const project = req.body;
    Projects.addProject(project)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong while adding a project', err})
        })
})

router.post('/:id/resources', (req,res) => {
    const resourceData = req.body;
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if(project) {
                Projects.addResource(resourceData, id)
                .then(resource => {
                    res.status(201).json(resource);
                })
            } else {
                res.status(404).json({ message: 'Could not find project'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong adding resource'})
        })
})

router.post('/:id/tasks', (req,res) => {
    const taskData = req.body;
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if(project) {
                Projects.addTask(taskData, id)
                .then(task => {
                    res.status(201).json(task)
                })
            } else {
                res.status(404).json({ message: 'Could not find project'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong adding new task', err})
        })
});

router.delete('/:id', (req,res) => {
    const { id } = req.params
    Projects.remove(id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: 'Project has been removed', count})
            } else {
                res.status(404).json({ message: 'Project could not be located'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong removing the project', err})
        })
})

module.exports = router;
