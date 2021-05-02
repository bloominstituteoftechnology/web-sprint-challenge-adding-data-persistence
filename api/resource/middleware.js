const db = require("./model")

const checkResourceId = async (req, res, next) => {
  const uniqueID = await db.getByID(req.params.id)
    if (!uniqueID) {
      res.status(404).json({message: `Resource with id ${req.params.id} is not found`})
    } else {
      req.uniqueID = uniqueID
      next() 
}}

const checkResourcePayload =  (req, res, next) => {
  if (!req.body.resource_name) {
    res.status(400).json({message: "resource name is required"})
  } else {
    next()
  }
}


module.exports= { checkResourceId, checkResourcePayload }