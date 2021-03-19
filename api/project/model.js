// build your `Project` model here
const db = require('../../data/dbConfig.js');

const getAll = () => {
  //return db.select().table('projects');
  return db('projects');
}

const getById = id => {
  return db('projects').where('project_id', id).first();
}

const create = async project => {
  const value = await db('projects').insert(project);
  return getById(value);
}

module.exports = {
  getAll,
  getById,
  create
}