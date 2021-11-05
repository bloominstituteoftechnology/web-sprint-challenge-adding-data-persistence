const db = require('../../data/dbConfig')

async function getProjects() {
    const projects = await db('projects')

    return projects.map((project) => {
        return {
            ...project,
            project_completed: project.project_completed === 1,
        }
    })
}

async function insert (project) {
    const [id] = await db('projects').insert(project)
    return findById(id)
}

module.exports = {
    getProjects,
    insert
}