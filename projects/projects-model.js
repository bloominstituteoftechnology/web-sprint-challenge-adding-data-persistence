const db = require("../data/dbConfig");

function getProjects() {
  return db("projects");
}

function addProjects(newProject) {
  return db("projects").insert(newProject);
}

module.exports = {
  getProjects,
  addProjects,
};
