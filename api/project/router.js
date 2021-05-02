// build your `/api/projects` router here
const express = require("express")
const router = express.Router()
const db = require("./model")
const {checkProjectId, checkProjectPayload} = require("./middleware")

router.get("/api/projects", async (req, res, next) => {
  try {
		const project = await db.getAll()
		res.json(project)
	} catch(err) {
		next(err)
	}
})

router.get("/api/projects/:id", checkProjectId, async (req, res, next) => {
  try {
  const project = await db.getByID(req.params.id)
    if (project) {
      res.status(200).json(project)
    }
  } catch(err) {
    next(err)
  }
})
  
router.post("/api/project", checkProjectPayload, async (req, res, next) => {
  try {
		const newProject = await db.create(req.body)
		res.json(newProject)
	} catch(err) {
		next(err)
	}
})


module.exports = router