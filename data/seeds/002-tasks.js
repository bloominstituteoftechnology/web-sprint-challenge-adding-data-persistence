exports.seed = function(knex) {
  const tasks = [
    {
      description: "Task one is to set up the project",
      notes: "Add notes where you think this should go",
      completed: false,
      project_id: 1
    },
    {
      description: "Task Two is to hire Joe Bob",
      notes: "",
      completed: true,
      project_id: 1
    }
  ]
  
    return knex('tasks').insert(tasks)
  };