// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
return db("Projects as p").select("p.project_name", "p.description", "p.completed");
},
findById(id) {
  return db("projects").where({ id }).first();
},
async addProject(project) {
  const [id] = await db("projects").insert(project);
  return this.findById(id);
},
};