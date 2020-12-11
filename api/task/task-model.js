// build your `Task` model here

const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("Task as t")
      .leftJoin("Projects as p", "p.Project_ID", "t.Project_ID")
      .select(
        "t.Task_ID",
        "t.Description",
        "t.Notes",
        "t.Completed",
        "p.Project_ID",
        "p.Name"
      );
  },
  findById(id) {
    return db("Task").where({ id }).first();
  },

  async addTask(task) {
    const [id] = await db("Task").insert(task);
    return this.findById(id);
  },
};
