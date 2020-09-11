const express = require('express');

const Project = require('./project-model.js');

const router = express.Router();

router.get('/project', (req, res) => {
  Project.findProjects()
  .then(value => {
    res.json(value);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Project.findById(id)
    .then(value=> {
        res.status(200).json(value)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Project' });
    });
  });

// router.get('/resource', (req, res) => {
//   Project.get()
//   console.log('test')
//   .then(value => {
//     console.log(value, 'this is the value')
//    res.status(200).json(value)
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get Resources' });
//   });
// });

router.get('/resource', (req, res) => {
    Project.get()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({
        error: `Unable to fetch projects ${error.message}`
      })
    })
  });

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Project.findTasks(id)
  .then(value => {
    res.status(200).json(value)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.post('/', (req, res) => {
  const changes = req.body;

  Project.addProject(changes)
  .then(value => {
    res.status(201).json(value);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Project' });
  });
});

router.post('/resource', (req, res) => {
    const changes = req.body;
  
    Project.addResource(changes)
    .then(value => {
      res.status(201).json(value);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Resource' });
    });
  });

router.post('/:id/tasks', (req, res) => {
  const changes = req.body;
  const { id } = req.params; 

  Project.findById(id)
  .then(value => {
    if (value) {
      Project.addTask(changes, id)
      .then(task => {
        res.status(201).json(task);
      })
    } else {
      res.status(404).json({ message: 'Could not find Project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Task' });
  });
});


module.exports = router;