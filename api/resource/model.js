// build your `Resource` model here

const db = require("../../data/dbConfig");
module.exports = {
  getAll() {
    return db("resources");
  },
  findById(id) {
    return db("resources").where({ id }).first();
},

async addResource(resource) {
  const [id] = await db("resources").insert(resource);
  return this.findById(id);
},
};