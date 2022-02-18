// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources')
}

const createResources = async (materials) => {
    const id = await db('resources').insert(materials, 'id')
      return db('resources').where('resource_id', id).first()
}

module.exports = {
    getAllResources,
    createResources
}