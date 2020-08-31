const express = require('express');
const router = express.Router();

const db = require('./projects-model')

router.get('/projects', async (req,res) => {
    try {
        const projects = await db.getProjects()
        res.json(projects)
    } catch(err) {
        console.log(err)
        res.status(500).json({ 
            message: 'There was an error retrieving the projects' 
        })
    }
})

router.get('/resources', async (req,res) => {
    try {
        const resources = await db.getResources()
        res.json(resources)
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'There was an error retrieving the resources'
        })
    }
})

router.get('/projects/:id/tasks', async (req,res) => {
    try {
        const tasks = await db.getTasks(req.params.id)
        res.json(tasks)
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'There was an error retrie'
        })
    }
})

router.post('/projects', async (req,res) => {
    try {
        const id = await db.addProject(req.body)
        res.json({
            message: `Successfully created project of id ${id}`
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'There was an error adding the project'
        })
    }
})

router.post('/resources', async (req,res) => {
    try { 
        const id  = await db.addResource(req.body)
        res.json({
            message: `Successfully created resource of id ${id}`
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'There was an error creating the resource'
        })
    }
})

router.post('/projects/:id/tasks', async (req,res) => {
    try {
        const id = await db.addTask(req.body, req.params.id)
        res.json({
            message: `Successfully created the task of id ${id}`
        })
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'There was an error creating the task'
        })
    }
})

module.exports = router