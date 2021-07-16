const express = require('express')
const Tasks = require('./model')

const router = express.Router()

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
router.get('/', (req, res, next) => {
    console.log("GET tasks endpoint connected")
})

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
router.post('/', (req, res, next) => {
    console.log("POST tasks endpoint connected")
})

module.exports = router;