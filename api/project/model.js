// build your `Project` model here
const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('projects');
    const result = rows.map(row => {
        return {
            ...row,
            project_completed: row.project_completed ? true : false
        }
    })
    return (result)
}

async function create(project) {
    const [newID] = await db('projects').insert(project)
    const newPost = await db('projects').where('project_id', newID)
    const result = newPost.map(row => {
        return {
            ...row,
            project_completed: row.project_completed ? true : false
        }
    })
    return result[0]
}

async function getById(id) {
    try {
        const row = await db('projects')
            .where('project_id', id)
        return (row)
    } catch (error) {
        return
    }

}

module.exports = {
    get,
    create,
    getById
}