const express = require("express");
const Task = require("./model");
//hook up middleware
const router = express.Router();

//endpoints
//post
router.get("/", (req, res) => {
  Task.findAll().then((resp) => {
    res.status(200).json(resp);
  });
});

module.exports = router;
