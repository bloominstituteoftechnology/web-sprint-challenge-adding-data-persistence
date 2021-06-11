// build your `/api/resources` router here
const express = require('express')

const Resources = require('./model')

const router = express.Router()

const checkName = (req, res, next) => {
    const { resource_name } = req.body
    if (!resource_name) {
        res.status(400).json({
            message: 'Resource name is required'
        })
    }else {
        next()
    }
}

router.post('/', checkName, async (req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.json(newResource)
    }
    catch(err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const resource = await Resources.getResources()
        res.json(resource)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router



//If you could please explain why my code doesn't work I would appreciate it greatly.
//I was sick for much of this unit and it has been so stressful but I am trying my best so I would love to know where I am going wrong thank you so much.