// build your `Resource` model here

const db = require('../../data/dbConfig.js')

const getAll = async () => {
    return await db("resources")
}

const create = async (resource) => {
    return await db("resources").insert(resource)
}

module.exports = {
    getAll,
    create,
}

