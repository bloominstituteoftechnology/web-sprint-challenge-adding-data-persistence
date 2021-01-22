// build your `/api/projects` router here
const express=require('express');
const Project=require("./model")
const router=express.Router();
const {validateProjectBody}=require('../middleware/middleware');

router.get('/',(req,res,next)=>{
  Project.getProjects()
  .then(projectsList=>{
      projectsList.forEach((obj)=>{
        if(obj.project_completed===1){obj.project_completed=true}
        else {obj.project_completed=false}
      })
        res.status(200).json(projectsList)
    })
      
  .catch(next)
})

router.post('/',validateProjectBody,(req,res,next)=>{
  Project.addProject(req.body)
  .then(project=>{
      if(project.project_completed===1){project.project_completed=true}
      else {project.project_completed=false}
    
      res.status(200).json(project)
    
  })
  .catch(next)
})
 

router.use((error, req, res, next)=>{
    res.status(500).json({ info: 'There was an error in the router',
  message: error.message,
  stack: error.stack})
  })

module.exports=router