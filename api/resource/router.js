// build your `/api/resources` router here
const router = require('express').Router()

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: 'something went wrong inside the RESOURCES router',
      errMessage: err.message,
    })
})

module.exports = router;