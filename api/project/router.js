// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = require('express').Router()

router.post('/',(req, res, next) => {
    Project.insert(req.body)
        .then(project => {
            res.status(200).json(project);
        })
    .catch(next)
})

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        errorMessage: 'something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router