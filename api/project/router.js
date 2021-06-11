// build your `/api/projects` router here

//setting up
const express = require("express")
const router = express.Router()
const db = require("./model")

const { checkProjectPayload} = require("./middleware");

//`[GET] /api/resources`
router.get("/", async (req, res, next)=>{
    try{
        const project = await db.getAll()
        res.json(project)
        }//end of try
        catch(err){next(err)}
})



//`[POST] /api/resources`
router.post("/", checkProjectPayload, async (req, res, next) =>{
    try{
        const newProject = await db.create(req.body)
        res.json(newProject)
    }//end of try
    catch(err){next(err)}//end of catch
} )

module.exports = router;