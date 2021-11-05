const express = require("express");
const Project = require("./model");
const { validateBody } = require("./middleware");
const router = express.Router();

router.get("/", (req, res) => {
  Project.findAll().then((resp) => {
    res.status(200).json(resp);
  });
});

router.post("/", validateBody, (req, res) => {
  Project.postProject(req.body)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      console.log(err);
    });
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
