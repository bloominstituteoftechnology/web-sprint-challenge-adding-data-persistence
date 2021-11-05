const express = require("express");
const { validateBody, checkResourceNameUnique } = require("./middleware");
const Resource = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  Resource.findAll().then((resp) => {
    res.status(200).json(resp);
  });
});

router.post("/", validateBody, checkResourceNameUnique, (req, res, next) => {
  Resource.postResource(req.body)
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
