const projectValidation =
    (req, res, next) => {

        const { project } = req.body
        if (!project.name || !project.description) {
            res.status(400).json({ message: "Sorry bud, we're going to need a name." })
            return;
        } else {
            next();
        }
    }
//typeof project_name !== 'string' || project_name.trim() === ''


module.exports = projectValidation;