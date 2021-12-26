// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const create = async (resource) => {
    const [id] = await db('resources').insert(resource)
    return db('resources').where('resource_id', id).first()
}

module.exports = {getAll, create}