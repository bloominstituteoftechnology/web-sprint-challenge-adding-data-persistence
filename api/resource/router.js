// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res) => {
    Resource.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            err.status(500).json({
                message: err.message
            })
        }) 
})

router.post('/', async (req,res, next) => {
    const resource = req.body
    try {
        const check = await Resource.getResources()
        check.map((e) => {
            if (resource.resource_name === e.resource_name) {
                res.status(404).json({
                    message: 'Name is already taken'
                })
            }
        })

        const newResource = await Resource.addResources(resource)
        res.status(201).json(newResource[0])
    } catch (err) {
        next(err)
    }
})

module.exports = router