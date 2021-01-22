const Project=require('../project/model')


function validateResourceBody(req,res,next){
    console.log(req.body)
    if(Object.keys(req.body).length===0){
        res.status(400).json({message:"Missing resource data."})
      }
    else if(!req.body.resource_name){
        res.status(400).json({message:"Missing resource name."})
    }
    
    else{next()}
}

function validateProjectBody(req,res,next){
    console.log(req.body)
    if(Object.keys(req.body).length===0){
        res.status(400).json({message:"Missing project data."})
      }
    else if(!req.body.project_name){
        res.status(400).json({message:"Missing project name."})

    }
    else{next()}
}

function validateProjectId(req,res,next){
    if(!req.body.project_id){ res.status(404).json(`Project with id missing from request`)}
    else{
    Project.getProjectById(req.body.project_id)
    .then(idvalid=>{
        if(!idvalid){
            res.status(404).json(`Project with id ${req.body.project_id} not found`)
        }
        else{next()}
    })
    }
}
function validateTaskBody(req,res,next){
    if(Object.keys(req.body).length===0){
        res.status(400).json({message:"Missing project data."})
      }
    else if(!req.body.task_description){
        res.status(400).json({message:"Missing task description."})

    }
    
    else{next()}
}



module.exports={validateResourceBody,validateProjectBody,validateTaskBody,validateProjectId}