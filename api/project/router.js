const router = require('express').Router();
const Project = require('./model');

router.post('/project', (req, res) => {
    Project.addPj(req.body)
        .then((newPj) => {
            res.status(200).json(newPj);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get('/projects', (req, res) => {
    Project.pjList()
        .then((pjList) => {
            res.status(200).json(pjList);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;