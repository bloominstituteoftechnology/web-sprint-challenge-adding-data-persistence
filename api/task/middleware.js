const Project = require("../project/model");

const validateBody = (req, res, next) => {
  const { task_description, project_id, task_completed } = req.body;
  if (
    !task_description ||
    typeof task_description !== "string" ||
    task_description === ""
  ) {
    res.status(400).json({ message: "task_name required" });
  }
  if (!project_id || typeof project_id !== "number" || project_id === null) {
    res.status(400).json({ message: "project_id required" });
  }
  if (!task_completed || task_completed === undefined) {
    req.body.task_completed = false;
  }
  next();
};

const validateProjectID = (req, res, next) => {
  Project.getById(req.body.project_id).then((project) => {
    if (project !== undefined) {
      next();
    } else {
      next({
        status: 404,
        message: `id:${req.body.project_id} not found`,
      });
    }
  });
  next();
};
module.exports = {
  validateBody,
  validateProjectID,
};
