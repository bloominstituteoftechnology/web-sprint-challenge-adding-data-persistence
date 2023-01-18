/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      project_name: 'Create table',
      project_description: 'Intial SQL table creation',
      project_completed: false
    },
    {
      project_name: 'Seed Table',
      project_description: 'create seeds for tables',
      project_completed: true
    },
  ]);
};
