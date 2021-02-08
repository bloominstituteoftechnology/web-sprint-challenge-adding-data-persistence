// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const projectModel = require('./model');

//POST - /api/project

router.post('/', async (req, res, next)=>{
    console.log(req.body)
    await projectModel.insert(req.body)
    .then(resolve =>{
        res.status(200).json({
            message:`New project has been added`,
            proj: req.body
        })
    }).catch(next)
    res.status(400).json({message: `Request could not be made at this time.`})
})

//GET - /api/projects

router.get('/', async (req, res, next)=>{
    const projects = await projectModel.get()
    if(projects){
        res.status(200).json({projects: projects})
    }else{
        res.status(400).json({message:'Could not complete request.'})
    }

})

module.exports = router;
