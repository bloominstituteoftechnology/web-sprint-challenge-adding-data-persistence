exports.seed = function(knex, Promise) {
  return knex('resources').insert([
      { resource_name: 'Computer', resource_description: 'Device used to write code', project_id: 1}
  ])
}