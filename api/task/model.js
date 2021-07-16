const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find(projectId) {
  return db('task')
  .leftJoin('project as p')
  .where('project_id', projectId)
  .select('task.id', 'p.name as ProjectName', 'p.description as ProjectDescription', 'task.description as TaskDescription', 'task.notes', 'task.completed')
}

function findById(projectId, id) {
  return db('task')
  .leftJoin('project as p')
  .where('project_id', projectId)
  .where('id', id)
  .select('tasek.project_id', 'p.name as ProjectName', 'description', 'notes', 'completed')
  .first()
}

function add(newTask) {
  return db('task')
  .insert(newTask)
}

function update(projectId, id, newTask) {
  return db('task')
  .where('project_id', projectId)
  .where('id', id)
  .update(newTask)
}

function remove(projectId, id) {
  return db('task')
  .where('id', id)
  .del()
}