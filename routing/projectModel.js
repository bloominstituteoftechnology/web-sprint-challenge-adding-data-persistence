const db = require("../data/db-config");
module.exports = {
  addResource(resource) {
    return db("resources")
      .insert(resource, "id")
      .then(() => this.getResource());
  },
  getResource() {
    return db("resources").select("*");
  },
  addProject(project) {
    return db("projects")
      .insert(project, "id")
      .then(([id]) => this.getProjectById(id));
  },
  getProjects() {
    return db("projects").select("*");
  },
  addTask(task) {
    return db("tasks")
      .insert(task, "id")
      .then(() => this.getTasks(task.project_id));
  },
  getTasks(id) {
    return db("tasks as t")
      .join("projects as p", "p.id", "t.project_id")
      .select(
        "p.project_name",
        "p.project_description",
        "t.id",
        "t.task_description",
        "t.completed"
      )
      .where({ project_id: id });
  },
  getProjectById(id) {
    return db("projects").where({ id }).first();
  },
};
