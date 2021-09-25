// build your `Resource` model here
const db = require('../../data/dbConfig')

const find = () => {
    return db('resources')
}

const findById = async (resource_id) => {
    const resource = await db('resources').where({ resource_id }).first()

    return resource
}

const create = async (newResource) => {
    const [resource_id] = await db('resources').insert(newResource)

    return findById(resource_id)
}

module.exports = {
    find,
    findById,
    create
}