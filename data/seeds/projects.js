
exports.seed = async function(knex) {
  await knex('project_resources').truncate()
  await knex('tasks').truncate()
  await knex('resources').truncate()
  await knex('projects').truncate()
  await knex('projects').insert([
      {name: 'Introduction to Relational Databases', description: 'Introduction to Relational Databases'},
      {name: 'Database Schema Design', description: 'Database Schema Design'},
      {name: 'Multi-Table Queries', description: 'Multi-Table Queries'}
  ])
  await knex('resources').insert([
      {name: 'computers', description: 'a useful tool'},
      {name: 'desk', description: 'A place to do your work'}
  ])
  await knex('tasks').insert([
      {description: 'Do some stuff', notes: null, project_id: 1},
      {description: 'Do some omre stuff', notes: 'really think hard', project_id: 1}
  ])
  await knex('project_resources').insert([
      {project_id: 1, resource_id: 1, quantity: 10},
      {project_id: 1, resource_id: 2, quantity: 5}
  ])
};
