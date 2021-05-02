// build your `/api/resources` router here
const express = require("express")
const router = express.Router()
const db = require("./model")
const {checkResourceId, checkResourcePayload} = require("./middleware")

router.get("/api/resources", async (req, res, next) => {
  try {
		const resource = await db.getAll()
		res.json(resource)
	} catch(err) {
		next(err)
	}
})

router.get("/api/resources/:id", checkResourceId, async (req, res, next) => {
  try {
  const resource = await db.getByID(req.params.id)
    if (resource) {
      res.status(200).json(resource)
    }
  } catch(err) {
    next(err)
  }
})
  
router.post("/api/resources", checkResourcePayload, async (req, res, next) => {
  try {
		const newResource = await db.create(req.body)
		res.json(newResource)
	} catch(err) {
		next(err)
	}
})




module.exports = router