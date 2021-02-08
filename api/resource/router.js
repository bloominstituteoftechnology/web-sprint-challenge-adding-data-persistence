// build your `/api/resources` router here

const e = require('express');
const express = require('express');
const router = express.Router();
const resourceModel  = require('./model.js');

//POST - /api/resources

router.post('/', async (req, res, next)=>{
    await resourceModel.insert(req.body)
    .then(resolve =>{
        console.log(resolve);
        res.status(200).json({
            message:  `New resource has been added.`,
            rsrc: req.body
        })
    }).catch(next)    

})

//GET - /api/resources

router.get('/', async (req, res, next)=>{
    
    const resources = await resourceModel.get()
    if(resources){
        res.status(200).json({resources: resources})
    }else{
        res.status(400).json({message: `Could not be done at this time.`})
    }
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
