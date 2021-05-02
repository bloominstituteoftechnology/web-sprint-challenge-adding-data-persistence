// build your `/api/tasks` router here
const express = require("express")
const router = express.Router()
const db = require("./model")
const {checkTaskId, checkTaskPayload} = require("./middleware")

router.get("/api/tasks", async (req, res, next) => {
  try {
		const task = await db.getAll()
		res.json(task)
	} catch(err) {
		next(err)
	}
})

router.get("/api/tasks/:id", checkTaskId, async (req, res, next) => {
  try {
  const task = await db.getByID(req.params.id)
    if (task) {
      res.status(200).json(task)
    }
  } catch(err) {
    next(err)
  }
})

router.post("/api/tasks", checkTaskPayload, async (req, res, next) => {
  try {
		const newTask = await db.create(req.body)
		res.json(newTask)
	} catch(err) {
		next(err)
	}
})



module.exports = router