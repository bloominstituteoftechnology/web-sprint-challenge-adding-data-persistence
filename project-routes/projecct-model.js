module.exports = {
  findProject,
  addProject,
  projectById,
};
const db = require("../data/db-config");
//Returns all prjects
function findProject() {
  return db("projects");
}
// Gets project by Id
function projectById(id) {
  return db("projects").where({id});
}
// adds a project
function addProject(addition) {
  return db("projects")
    .insert(addition)
    .then((ids) => {
      const id = ids[0];
      return projectById(id);
    });
}
