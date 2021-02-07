// build your `/api/resources` router here

const express = require('express');
const router = express.Router();
const resourceModel  = require('./model.js');

//POST - /api/resources

router.post('/', async (req, res, next)=>{
    await resourceModel.get()
    .then(resolve =>{
        console.log(resolve);
        res.status(200).json({
        "resource_id":1,
        "resource_name":"foo",
        "resource_description":null
      })
    }).catch(next)    

})

//GET - /api/resources

router.get('/', (req, res, next)=>{
    

    res.status(200).json([
    {
        "resource_id":1,
        "resource_name":"foo",
        "resource_description":null
    }
    ])
})

//GET - /api/resources/:id

router.get('/:id', (req, res, next)=>{
    

    res.status(200).json([
    {
        "resource_id":1,
        "resource_name":"foo",
        "resource_description":null
    }
    ])
})
//
module.exports = router;
