const router = require("express").Router();

const Task = require("../task/model");

router.getAll("/", (req, res, next) => {
  Task.getAllTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customeMessage: "something bad happend inside the TASK router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
