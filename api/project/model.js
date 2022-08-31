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


function insert(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => get(id));
}
// const create = async project => {
//     const [id] = await db('projects').insert(project)
//     return findById(id)
//   }

module.exports = { find, insert }