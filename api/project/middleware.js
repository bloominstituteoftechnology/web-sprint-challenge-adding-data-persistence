
async function checkProject(req,res,next){
    try {
        const { project_name } = req.body
        if(project_name){
            next();
        }else{
            next({ status: 400, message: 'project needs a name!'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkProject
}