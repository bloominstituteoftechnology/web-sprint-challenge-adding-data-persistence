exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_description: 'kitchen cleaning',
      task_notes: '',
      task_completed: false,
      project_id: 1
    },
    {
      task_description: 'vaccume on rug and carpet',
      task_notes: 'use dyson vaccume',
      task_completed: false,
      project_id: 1
    },
    {
       task_description: 'laundry on sunday',
       task_notes: 'do all different loads',
       task_completed: false,
       project_id: 1
    },
    {
      task_description: 'use canva, download it with PNG',
      task_notes: 'students will ask for it',
      task_completed: false,
      project_id: 2
    },
    {
      task_description: 'Jeff will make it quick, just call him on time',
      task_notes: '',
      task_completed: false,
      project_id: 2
    }
  ])
  
};