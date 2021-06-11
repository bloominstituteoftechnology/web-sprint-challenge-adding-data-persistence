// build your `/api/resources` router here
const express = require("express")
const router = express.Router()
const db = require("./model")

const {checkResourceId, checkResourcePayload} = require("./middleware")

//`[GET] /api/projects`
router.get("/", async (req, res, next)=>{
    try{
        const resource = await db.getAll()
        res.json(resource)
    }//end of try
    catch(err){next(err)} //end of catch
})

//`[POST] /api/projects`
router.post('/', checkResourcePayload, async (req, res, next)=>{
    try{
        const newResource = await db.create(req.body)
        res.json(newResource)
    }//end of try
    catch(err){next(err)}//end of catch
    
})
module.exports = router