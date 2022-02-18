// build your `/api/resources` router here
const router = require('express').Router()
const RM = require('./model')

// [GET] /api/resources
router.get('/', (req, res, next) => {
    RM.getAllResources()
      .then(getRes => {
          res.status(200).json(getRes)
      })
      .catch(next)
})

// [POST] /api/resources
router.post('/', (req, res, next) => {
    RM.createResources(req.body)
      .then(addNewRes => {
          res.status(201).json({
            status: 201,
            resource_id: addNewRes.resource_id,
            resource_name: addNewRes.resource_name,
            resource_description: addNewRes.resource_description,
          })
      })
      .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
    })
})


module.exports = router;