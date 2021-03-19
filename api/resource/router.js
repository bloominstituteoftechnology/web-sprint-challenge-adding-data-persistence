// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model');
const { checkResourcesPayload } = require("../middleware");


router.get('/', async (req, res, next) => {
  try {
    const allResources = await Resources.getAll();
    res.json(allResources);
  } catch(err) { next(err) }
})

router.post('/', checkResourcesPayload, async (req, res, next) => {
  try {
    const newResource = await Resources.create(req.body)
    res.status(201).json(newResource);
  } catch(err) { next(err) }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: 'something went wrong inside the RESOURCES router',
      errMessage: err.message
    })
})

module.exports = router;