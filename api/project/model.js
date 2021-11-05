const db = require("../../data/dbConfig.js");

async function findAll() {
  const projects = await db("projects");
  projects.map((project) => {
    if (project.project_completed === 1) {
      project.project_completed = true;
    } else project.project_completed = false;
  });
  return projects;
}

async function postProject(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = await getById(project_id);
  (await newProject.project_completed) === 0
    ? (newProject.project_completed = false)
    : (newProject.project_completed = true);
  return await newProject;
}

async function getById(project_id) {
  const [project] = await db("projects").where("project_id", project_id);
  return await project;
}

module.exports = { findAll, postProject, getById };
