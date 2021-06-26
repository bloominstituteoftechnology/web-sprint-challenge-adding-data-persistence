const router = require('express').Router();
const db = require('../../data/dbConfig.js');
const { 
    checkVinNumberUnique    
} = require('./tasks-middleware.js')
const Task = require('./model.js');

router.get('/', async (req, res, next) => {
    console.log("in the router get")
    try {
        console.log("in the try router get")
        const tasks = await Task.getAll() 
        console.log("taskss: ", tasks)
        res.status(200).json(tasks)
      } catch (err) {
        next(err)
      }
});



module.exports = router;

/*  
- [ ] `[POST] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
*/