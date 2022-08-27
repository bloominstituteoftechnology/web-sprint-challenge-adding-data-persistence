const projectValidation =
(req, res, next) => {

    const { project_name } = req.body
    if(typeof project_name !== 'string' || project_name.trim() === ''){
    res.status(400).json({message: "Sorry bud, we're going to need a name."})
    return;
    } else {
        next();
    }
}


module.exports = projectValidation