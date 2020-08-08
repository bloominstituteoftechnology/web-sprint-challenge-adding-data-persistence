
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {task_description: 'find a yoga class on youtube', projects_id: 1},
    {task_description: 'lay out all your matt and materials',task_notes:'materials should be within arms reach', projects_id: 1},
    {task_description: 'quick stretch', projects_id: 1},
    {task_description: 'follow along with the class', projects_id: 1},
    {task_description: 'decide on your layout', projects_id: 2},
    {task_description: 'gather all your materials', projects_id: 2},
    {task_description: 'start creating your layout', projects_id: 2},
    {task_description: 'spend 10 min daily on your journal',task_notes:'this helps get you in the habit of using it', projects_id: 2},
  ]);
};