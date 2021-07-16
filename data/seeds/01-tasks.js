exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {task_description: 'finance', task_notes: 'finance and accounting assets', project_id: 1},
    {task_description: 'strategy',task_notes: 'legal and strategic assets', project_id: 1},
    {task_description: 'product', task_notes: 'product and marketing assets', project_id: 1}
  ]);
};

