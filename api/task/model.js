// build your `Task` model here
const db = require('../../data/dbConfig');


async function find() {
  const tasks = await db('tasks as tsks')
      .select('tsks.task_id', 'tsks.task_description', 'tsks.task_notes', 'tsks.task_completed', 'pr.project_name', 'pr.project_description')
      .leftJoin('projects as pr', 'tsks.project_id', 'pr.project_id')
      .groupBy('tsks.task_id')
      .orderBy('tsks.task_id', 'asc')
  return tasks.map(task => {
      return ({
          ...task,
          task_completed: !!task.task_completed
      })
  })
}



function insert(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => db('tasks').where({id}));
}





// async function findById(id) {
//   const project = await db('projects').where('project_id', id).first()
//   return project
// }

// async function insert(project) {
//   const projectId = await db('projects').insert(project)
//   const createdProject = await findById(projectId)
//   return ({
//     ...createdProject,
//     project_completed: !!project.project_completed
//   })
// }




module.exports = { find, insert, };