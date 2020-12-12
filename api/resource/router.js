const router = require('express').Router();
const Project = require('./model');

router.post('/resource', (req, res) => {
    Project.addRes(req.body)
        .then((newRes) => {
            res.status(200).json(newRes);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get('/resources', (req, res) => {
    Project.resList()
        .then((resList) => {
            res.status(200).json(resList);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;