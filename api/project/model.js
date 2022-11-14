// build your `Project` model here


const db = require('../../data/dbConfig');

async function find() {
  const projects = await db('projects')
  return projects.map(project => {
    return ({
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: !!project.project_completed
    })
  })
}

async function findById(id) {
  const project = await db('projects').where('project_id', id).first()
  return project
}

async function insert(project) {
  const projectId = await db('projects').insert(project)
  const createdProject = await findById(projectId)
  return ({
    ...createdProject,
    project_completed: !!project.project_completed
  })
}
module.exports = { find, insert, findById }