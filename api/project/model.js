const db = require("../../data/db-config");

function getAllProjects() {
  return db("projects");
}

async function getProjectById(project_id) {
  const projectRows = await db("projects as p").where("project_id", project_id);

  return projectRows;
}

module.exports = {
  getAllProjects,
  getProjectById,
};
