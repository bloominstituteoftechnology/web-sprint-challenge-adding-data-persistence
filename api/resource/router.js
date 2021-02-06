// build your `/api/resources` router here

const express = require('express');
const router = express.Router();

//POST - /api/resources

router.post('/', (req, res, next)=>{

    res.status(200).json({
        "resource_id":1,
        "resource_name":"foo",
        "resource_description":null
    })
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

//
module.exports = router;
