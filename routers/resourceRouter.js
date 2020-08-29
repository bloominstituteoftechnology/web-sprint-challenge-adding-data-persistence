const express = require('express')
const router = express.Router()
const db = require('../data/dbConfig')

// GET all resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await db.select("*").from("resource")
        res.status(200).json(resources)
    } catch (error) {
        next(error)
    }
})

// POST new resource
router.post('/', async (req, res, next) => {
    try {
        const newResourceID = await db

        .insert({
            name: req.body.name,
            description: req.body.description
        })
        .into("resource")

        const viewResource = await db("resource").where("id", newResourceID).limit(1)
        res.status(201).json(viewResource)
    } catch (error) {
        next(error)
    }
})

module.exports = router