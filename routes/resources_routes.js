const express = require("express");
const db = require("../data/config");

const Resources = require("./resources-model")

const router = express.Router();

router.get("/resources", async(req,res,next)=>{
    try{
        res.json(await db("resources"))
    }catch(err){

    }
})

router.post("/resources", async (req,res,next)=>{
    const RD = req.body

    Resources.add(RD)
    .then(resource => {
        res.status(201).json(resource);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      });
})

module.exports = router;