// build your `/api/projects` router here
const router = require('express').Router();

const Project = require('./model.js');

router.get('/', (req, res, next) => {
    Project.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;