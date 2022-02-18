// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources')
}

const createResources = async (materials) => {
    const addNewMaterials = await db('resources').insert(materials, 'id')
      return db('resources').where('resource_id', addNewMaterials).first()
}

module.exports = {
    getAllResources,
    createResources
}