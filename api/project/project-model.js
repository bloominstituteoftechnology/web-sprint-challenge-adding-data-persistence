const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("Projects as p").select("p.Name", "p.Description", "p.Completed");
  },
  findById(id) {
    return db("Projects").where({ id }).first();
  },
  async addProject(project) {
    const [id] = await db("Projects").insert(project);
    return this.findById(id);
  },
};

// adding a new resource - [POST] /api/resources
// retrieving all resources - [GET] /api/resources
// adding a new project - [POST] /api/projects
// retrieving all projects - [GET] /api/projects
// adding a new task - [POST] /api/tasks
// retrieving all tasks - [GET] /api/tasks Each task must include project_name and project description so you will need to join tables
