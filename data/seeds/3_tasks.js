/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      task_description: 'begin intiial migration',
      task_notes: 'knex migrate:make {name}',
      task_completed: true,
      project_id: 1
    },
    {
      task_description: 'write tables',
      task_notes: '.createTable',
      task_completed: true,
      project_id: 1
    },
    {
      task_description: 'write rollback',
      task_notes: 'knex migrate:rollback',
      task_completed: false,
      project_id: 1
    },
    {
      task_description: 'populate data',
      task_notes: 'knex seed:make {name}',
      task_completed: false,
      project_id: 2
    },
    {
      task_description: "proofread",
      task_notes: null,
      task_completed: false,
      project_id: 2
    },
  ]);
};
