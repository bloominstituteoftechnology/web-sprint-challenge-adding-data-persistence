// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("Task");
  },
  findById(id) {
    return db("Task").where({ id }).first();
  },

  async addTask(task) {
    const [id] = await db("Task").insert(task);
    return this.findById(id);
  },
};
