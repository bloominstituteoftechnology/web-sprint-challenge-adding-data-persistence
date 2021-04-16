const validateProject = (req, res, next) => {
    if (!req.body.project_name || typeof req.body.project_name != "string"){
        return res.status(400).json({message: "invalid project name"})
    }
    next()
}

module.exports = {validateProject}