const express = require('express')
const Resources = require('./model')

const router = express.Router()

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
router.get('/', (req, res, next) => {
    console.log("GET resources endpoint connected")
})

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
router.post('/', (req, res, next) => {
    console.log("POST resources endpoint connected")
})

module.exports = router;