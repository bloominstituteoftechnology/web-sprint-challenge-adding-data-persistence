const db = require("../../data/dbConfig");

const validateProject = (req, res, next) => {
  const project = req.body;

  if (!project.Name && !project.Completed) {
    res.status(500).json({ message: "Missing required Fields." });
  } else {
    next();
  }
};

module.exports = {
  getAll() {
    return db("Projects");
  },
  addProject(project) {
    return db("Projects").insert(project);
  },
};

// adding a new resource - [POST] /api/resources
// retrieving all resources - [GET] /api/resources
// adding a new project - [POST] /api/projects
// retrieving all projects - [GET] /api/projects
// adding a new task - [POST] /api/tasks
// retrieving all tasks - [GET] /api/tasks Each task must include project_name and project description so you will need to join tables
