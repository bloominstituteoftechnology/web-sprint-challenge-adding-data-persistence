/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {
      resource_name: 'google',
      resource_description: 'search google on how to create tables and seeds',
    },
    {
      resource_name: 'bloomtech',
      resource_description: 'refer to bloomtech on table creation',
    },
    {
      resource_name: 'module 4',
      resource_description: 'module 4 described table creation',
    },
  ]);
};
