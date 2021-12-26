// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const projects = await db('projects')
    const results = []
    for(let i = 0; i < projects.length; i++){
        let result = {
            project_id: projects[i].project_id,
            project_name: projects[i].project_name,
            project_description: projects[i].project_description,
            project_completed: projects[i].project_completed === 0 ? false : true
        }
        results.push(result)
    }
    return results
}

const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return db('projects').where('project_id', id).first()
}

module.exports = {getAll, create}