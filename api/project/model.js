const db = require("../../data/dbConfig");
const getAllProjects = () => {
  return db("projects");
};

const postProject = (project) => {
  return db("projects").insert(project);
};

module.exports = {
  postProject,
  getAllProjects,
};
