// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const resModel = require('./model')

router.get('/', (req, res, next) => {
    resModel.find()
        .then(resAll => res.json(resAll))
        .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body
    if (resource.resource_name) {
        resModel.create(resource)
            .then(newResource => res.status(201).json(newResource))
            .catch(err => {
                res.status(500).json(err)
            })
    } else {
        return res.status(400).json({ message: "provide name, please" })
    }





    // resModel.create(resource)
    //     .then(obj => res.status(201).json(obj))
    //     .catch(next);
})


module.exports = router;