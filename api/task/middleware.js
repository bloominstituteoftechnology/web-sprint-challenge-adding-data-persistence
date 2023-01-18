const Project = require('../project/model')

async function checkTask(req, res, next) {
    try {
        const { task_description,project_id } = req.body
        let project = await Project.getById(project_id)
        if(project.length === 0 || !project_id){
            next({ status: 400, message: "invalid project_id"})
        }
        else if(!task_description){
            next({ status: 400, message: "requires task_description!"})
        }else{
            next();
        }
    } catch (error) {
        next(error)
    }

}

module.exports = {
    checkTask,
}