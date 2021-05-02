const db = require("./model")

const checkTaskId = async (req, res, next) => {
  const uniqueID = await db.getByID(req.params.id)
    if (!uniqueID) {
      res.status(404).json({message: `Task with id ${req.params.id} is not found`})
    } else {
      req.uniqueID = uniqueID
      next() 
}}

const checkTaskPayload =  (req, res, next) => {
  if (!req.body.task_description) {
    res.status(400).json({message: "task description is required"})
  } else {
    next()
  }
}


module.exports= { checkTaskId, checkTaskPayload }