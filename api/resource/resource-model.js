const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("Resources");
  },
  findById(id) {
    return db("Resources").where({ id }).first();
  },

  async addResource(resource) {
    const [id] = await db("Resources").insert(resource);
    return this.findById(id);
  },
};
