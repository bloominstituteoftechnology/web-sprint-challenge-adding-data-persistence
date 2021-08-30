// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
      const task = await db('task as task')
            .join('projects as proj', 'task.project_id', 'proj.project_id')
            .select('task.*', 'proj.project_name', 'proj.project_description')
      return task.map(t => {
            return {
                  ...t,
                  task_completed: task.task_completed ? true : false
            }
      })
}

async function getById(task_id) {
      const task = await db('tasks')
            .where({ task_id })
            .first()

      return {
            ...task,
            task_completed: task.task_completed ? true : false
      }
}

async function add(newTask) {
      const { id } = await db('tasks')
            .insert(newTask)
      
      return getById(id)
}

module.exports = {
      getAll,
      getById,
      add
}