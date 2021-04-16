// build your `/api/resources` router here
const router = require("express").Router();
const resources = require("./model.js")

router.get("/", (req,res)=>{
    resources.find()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err.message);
    })
})

router.post("/", (req,res)=>{
    resources.insert(req.body)
    .then(resource=>{
        res.status(201).json(resource);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err.message);
    })
})

module.exports = router;