// build your `/api/resources` router here
// build your `/api/projects` router here

const Resource=require("./model")

const {validateResourceBody}=require('../middleware/middleware');
const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
  Resource.getResources()
  .then(resourcesList=>{
      res.status(200).json(resourcesList)
  })
  .catch(next)
})

router.post('/',validateResourceBody,(req,res,next)=>{
  Resource.addResource(req.body)
  .then(resource=>{
    res.status(200).json(resource)
  })
  .catch(next)
})
 

router.use((error, req, res, next)=>{
    res.status(500).json({ info: 'There was an error in the router',
  message: error.message,
  stack: error.stack})
  })

module.exports=router