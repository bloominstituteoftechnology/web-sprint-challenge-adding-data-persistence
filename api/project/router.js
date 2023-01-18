// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const { checkProject } = require('./middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const data = await Project.get()
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

router.post('/', checkProject, async (req, res, next) => {
    const data = await Project.create(req.body)
    try {
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router