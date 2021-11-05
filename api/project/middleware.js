const validateBody = (req, res, next) => {
  const { project_name, project_completed } = req.body;
  if (
    !project_name ||
    typeof project_name !== "string" ||
    project_name === ""
  ) {
    res.status(400).json({ message: "project_name required" });
  }
  if (!project_completed || project_completed === undefined) {
    req.body.project_completed = false;
  }
  next();
};

module.exports = {
  validateBody,
};
