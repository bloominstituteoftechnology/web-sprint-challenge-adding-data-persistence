const express = require('express')
const Projects = require('./model')

const router = express.Router()

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
router.get('/', (req, res, next) => {
    console.log("GET projects endpoint connected")
})

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
router.post('/', (req, res, next) => {
    console.log("POST projects endpoint connected")
})

module.exports = router;