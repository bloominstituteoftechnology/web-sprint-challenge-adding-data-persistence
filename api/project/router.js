// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

//POST - /api/resources

router.post('/', (req, res, next)=>{
    
    res.status(200).json({
        "project_id":1,
        "project_name":"bar",
        "project_description":null,
        "project_completed":false
    })
})

//GET - /api/projects

router.get('/', (req, res, next)=>{

    res.status(200).json([{
        "project_id":1,
        "project_name":"bar",
        "project_description":null,
        "project_completed":false
    }])
})

module.exports = router;
