// build your `Task` model here

const db = require("../../data/dbConfig");
module.exports = {
  getAll() {
    return db("Task as t")
      .leftJoin("Projects as p", "p.project_id", "t.project_id")
      .select(
        "t.task_id",
        "t.description",
        "t.notes",
        "t.completed",
        "p.project_id",
        "p.project_name"
      );
  },
  findById(id) {
    return db("tasks").where({ id }).first();
  },
  async addTask(task) {
    const [id] = await db("tasks").insert(task);
    return this.findById(id);
  },
};