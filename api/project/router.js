const express = require('express')
const db = require('./project-model')

const project = express.Router()

project.get('/', (req, res, next) => {
  db.find()
  .then(projects => res.status(200).json(projects))
  .catch(err => next(err))
})

project.get('/:id', checkForProject(), (req, res, next) => {
  db.findById(req.params.id)
  .then(project => res.status(200).json(project))
  .catch(err => next(err))
})

project.post('/', validateProjectDataReqs(), (req, res, next) => {
  db.add(req.body)
  .then(() => {
    res.status(201).json({message: 'project created'})
  })
  .catch(err => next(err))
})

project.put('/:id', checkForProject(), validateProjectDataReqs(), (req, res, next) => {
  db.update(req.params.id, req.body)
  .then(() => {
    res.status(200).json({message: 'project updated successfully'})
  })
  .catch(err => next(err))
})

project.delete('/:id', checkForProject(), (req, res, next) => {
  db.remove(req.params.id)
  .then(() => {
    res.status(200).json({message: 'project deleted'})
  })
  .catch(err => next(err))
})

function validateProjectDataReqs() {
  return (req, res, next) => {
    if(!req.body.name) {
      res.status(400).json({error: 'name is a required field'})
    }
    else {
      next()
    }
  }
}

function checkForProject() {
  return (req, res, next) => {
    const requestedProject = db.findById(req.params.id)

    if (requestedProject) {
      next()
    }
    else{
      res.status(404).json({error: 'referenced project not found'})
    }
  }
}

module.exports = project