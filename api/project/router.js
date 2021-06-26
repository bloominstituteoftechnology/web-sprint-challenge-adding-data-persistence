const router = require('express').Router();
const db = require('../../data/dbConfig.js');
// const { 
//     checkCarId,
//     checkCarPayload,
//     checkVinNumberValid,
//     checkVinNumberUnique    
// } = require('./project-middleware.js')
const Project = require('./model.js');

router.get('/', async (req, res, next) => {
    console.log("in the router get")
    try {
        console.log("in the project, router, get")
        const projects = await Project.getAll() 
        console.log("projects: ", projects)
        res.status(200).json(projects)
      } catch (err) {
        next(err)
      }
}); // returns an array of project objects

router.post('/', async (req, res, next) => {
    // const projectData = req.resource;
    const projectData = req.body;

    console.log("projectData: ", projectData);
    try {
        const postedProject = await Project.create(projectData)
        console.log("postedProject: ", postedProject);
        res.status(201).json(postedResource);
      } catch (err) {
        console.log("Error in create: ", err)
        next(err)
      }
});

module.exports = router;

/*
- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

Boolean(Number("0")); // false
Boolean(Number("1")); // true

*/