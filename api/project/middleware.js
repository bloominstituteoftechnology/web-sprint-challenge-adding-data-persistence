const db = require('./model')

const checkProjectId = async (req,res,next)=>{
    const isUniqueID = await db.getById(req.params.id);
        if(!isUniqueID){
            res.status(400).json({message: `Project with ID of ${req.params.id} was not found`})
        }//end of if
        else{
            next()
        }//end of else
}

const checkProjectPayload = (req,res,next)=>{
    if(!req.body.project_name){
        res.status(400).json({message: "project name is required"})
    }
    else{
        next()
    }//end of else
}
module.exports = {
    checkProjectId,
    checkProjectPayload
}