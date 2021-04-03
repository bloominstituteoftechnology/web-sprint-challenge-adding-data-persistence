// build your `Project` model here

const db = require('../../data/dbConfig.js')

const getAll = async () => {
    let projects = await db("projects")
    return projects.map(p => {
        return {
            ...p,
            "project_completed": p['project_completed'] == 0 ? false : true
        }
    })
}

const create = async (project) => {
    return await db("projects").insert(project)
}

module.exports = {
    getAll,
    create,
}