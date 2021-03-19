// build your `Resource` model here
const db = require('../../data/dbConfig.js');

const getAll = () => {
  //return db.select().table('resources');
  return db('resources');
}

const getById = id => {
  return db('resources').where('resource_id', id).first();
}

const create = async resource => {
  const value = await db('resources').insert(resource);
  return getById(value);
}

module.exports = {
  getAll,
  getById,
  create
}