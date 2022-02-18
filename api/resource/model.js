// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources')
}

const createResources = async (materials) => {
    const addRes = await db('resources').insert(materials, 'id')
      return db('resources').where('resource_id', addRes).first()
}

module.exports = {
    getAllResources,
    createResources
}