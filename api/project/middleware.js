const Project = require("./model")

const projectId = (req,res,next) => {
    Project.checkById(req.body.project_id)
    .then(project => {
        if(!project){
            next({
                message: " Where is the id?",
                status: 404
            })
        }
        else{
            next()
        }
    })

}

const payloadId = (req, res, next)=> {
    const {project_name} = req.body


if(project_name === undefined){
    next({
        message: " name is required",
        status:400

    })
}
else{
    next()
}
}
module.exports = {
    projectId,
    payloadId
}