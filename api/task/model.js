// build your `Task` model here
const db = require('../../data/dbConfig.js');

const getAll = () => {
  //return db.select().table('tasks');
  return db('tasks');
}

const getById = id => {
  return db('tasks').where('id', id).first();
}

const create = async task => {
  const value = await db('tasks').insert(task);
  return getById(value);
}

module.exports = {
  getAll,
  getById,
  create
}