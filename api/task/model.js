// build your `Task` model here
const db = require('../../data/dbConfig.js');

const getAll = () => {
  //return db.select().table('tasks');
  return db('tasks')
  .join('projects', 'tasks.project_id', '=', 'projects.project_id')
  .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')

// SELECT task_id, task_description, task_notes, task_completed, project_name, project_description
// FROM tasks t
// JOIN projects p
//     ON p.project_id = t.project_id
}

const getById = id => {
  return db('tasks').where('task_id', id).first();
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