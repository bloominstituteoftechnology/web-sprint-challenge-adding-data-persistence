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

module.exports = {
  validateBody,
};
