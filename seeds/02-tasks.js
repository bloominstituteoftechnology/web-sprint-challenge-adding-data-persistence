exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
      { task_description: 'meet with team to discuss roles in project', task_notes: 'split work evenly', project_id: 1}
  ])
}