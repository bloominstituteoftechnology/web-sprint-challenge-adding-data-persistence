const db = require("../../data/dbConfig");
//get all projects
const getAllProjects = () => {
  return db("projects");
};
//post a project
const postProject = (project) => {
  return db("projects").insert(project);
};

module.exports = {
  postProject,
  getAllProjects,
};
