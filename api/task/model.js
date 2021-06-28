const db = require('../../data/dbConfig');


function getTasks() { // INCLUDING PROJECTS NAME
  return db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_id');
}

async function createTask(task) {
  const [task_id] = await db('tasks').insert(task);
  return getTasks().where({ task_id }).first();
}



module.exports = {
  
  getTasks,
  createTask,
};


