const express = require('express')
const Resources = require('./model')

const router = express.Router()

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
router.get('/', (req, res, next) => {
    // console.log("GET resources endpoint connected")
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
router.post('/', (req, res, next) => {
    // console.log("POST resources endpoint connected")
    const resource = req.body

    Resources.addResource(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router;