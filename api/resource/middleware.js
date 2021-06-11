const db = require("./model");

const checkResourceId = async (req, res ,next) =>{
    const isUniqueID = await db.getById(req.params.id)
    if (!isUniqueID){
        res.status(404).json({message: `Resource with id ${req.params.id} is not found`})
    }//end of if 
    else{
        req.id = isUniqueID
        next()
    }
}
const checkResourcePayload = (req, res, next) =>{
    if(!req.body.resource_name){
        res.status(400).json({message: "resource name is required"})
    }//end of if
    else{
        next()
    }
}
module.exports = {
    checkResourceId,
    checkResourcePayload
}