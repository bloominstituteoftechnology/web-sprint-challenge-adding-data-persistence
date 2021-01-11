// build your `/api/resources` router here
const express = require("express");
const Resource = require("../resource/model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const resource = await Resource.findResource()
        res.json(resource);
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (res, req, next) => {
    try {
        const resource = await Resource.findResourceById(req.params.id)
        if (!resource) {
            return res.status(404).json({
                Message: "Resource with specific id doesn't exsist"
            })
        }
        res.json(resource);
    } catch (err) {
        next(err);
    }
})


module.exports = router;