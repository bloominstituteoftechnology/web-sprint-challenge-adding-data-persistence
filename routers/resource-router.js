const router = require('express').Router()
const Resources = require('./resource-model');

router.get('/', (req, res) => {
    Resources.getResources().then( resources => {
        res.status(200).json({resources})
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
})

router.get('/:id', (req, res) => {
    Resources.getResourceById(req.params.id).then( resource =>{
        res.status(200).json(resource)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
})

router.post('/', (req, res) => {
    Resources.addResource(req.body).then(resource => {
        res.status(201).json({resource});
    })    
    .catch((error) => {
        res.status(500).json({error: error.message})
  
    })
})

module.exports = router;