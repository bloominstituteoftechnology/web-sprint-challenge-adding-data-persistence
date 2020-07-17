const express = require('express');
const projects = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
    
    projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            handleError(err, res);
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    projects.getById(id)
    .then(project => {
        if (project) {
          res.json(project);
        } else {
          res.status(404).json({ message: 'Could not find project with given id.' })
        }
      })
        .catch(err => {
            handleError(err, res);
        });
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    projects.getTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given project' })
      }
    })
    .catch(err => {
        handleError(err, res);
    });
  });

router.post("/", (req, res) => {
    const projectInfo = req.body;

   projects.add(projectInfo)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        handleError(err, res);
    });
});

router.post('/:id/tasks', (req, res) => {
    const taskInfo = req.body;
    const { id } = req.params; 
  
    projects.getById(id)
    .then(project => {
      if (project) {
        projects.addTask(taskInfo, id)
        .then(task => {
          res.status(201).json(task);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
        handleError(err, res);
    });
  });

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const update = req.body;

   projects.getById(id)
    .then(project => {
        if (project) {
        projects.update(update, id)
        .then(changed => {
            res.json(changed);
        });
        } else {
        res.status(404).json({ message: 'Could not find project with given id' });
        }
    })
    .catch(err => {
        handleError(err, res);
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    projects.remove(id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ data: count });
            } else {
                res.status(404).json({ message: "there was no record to delete" });
            }
        })
        .catch(err => {
            handleError(err, res);
        });
});

function handleError(err, res) {
    console.log("error", err);
    res.status(500).json({ message: err.message });
}


module.exports = router;