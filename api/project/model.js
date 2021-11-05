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

async function findById (id) {
    const row = await db('projects')
        .where('project_id', id)
        .first();
    return {
        ...row, 
        project_completed: row.project_completed ? true : false
    }
}

async function insert (project) {
    const [id] = await db('projects')
        .insert(project)
    return findById(id)
}

module.exports = {
    getProjects,
    insert
}