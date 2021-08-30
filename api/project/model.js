// build your `Project` model here
const db = require("../../data/dbConfig")

async function getAll() {
      const projects = await db('projects')
      return projects.map(p => { //p is the project callback
            return {
                  ...p, //spread into project
                  project_completed : p.project_completed ? true : false
            }
      })
}

async function getById(project_id) { 
      const project = await db('projects')
            .where({ project_id })
            .first()
      
            return {
                  ...project,
                  project_completed : project.project_completed ? true : false
            }
}

async function add(newProject) {
      const { id } = await db('projects')
            .insert(newProject)

      return getById(id)
}

module.exports = {
      getAll,
      getById,
      add
}