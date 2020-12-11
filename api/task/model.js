// build your `Task` model here
module.exports = {
    findTasks,
    allTasks,
    addTasks,
  };
  
const db = require('../../data/dbConfig');
  
  // Gets all the tasks 
  function allTasks() {
    return db('tasks');
  }
  //Finds all tasks for a specific project 

  function findTasks(id) {
    return db('projects')
      .join('tasks', 'tasks.project_id', '=', 'projects.id')
      .select(
        'projects.project_name',
        'projects.description',
        'tasks.description as Task',
        'projects.completed AS ProjectCompletion',
        'tasks.completed AS TaskCompletion',
        'tasks.notes'
      )
      .where({ 'projects.id': id });
  }
  
  // This adds a task to a project
  function addTasks(id, task) {
    return db('tasks')
      .where({id })
      .insert(task)
  }