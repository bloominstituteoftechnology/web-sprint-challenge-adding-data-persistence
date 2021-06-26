const db = require('../../data/dbConfig.js')

const getAll = () => {
    return db("resources")
  }

  const getById = (id) => {
    return db("resources").where("resource_id", id).first()
    // .first() gives us just the object ... not in an array [{}]
  }

const create = async (newResource) => {
    const [id] = await db("resources").insert(newResource);
    return getById(id)
}

  module.exports = {
    getAll,
    getById,
    create
  };