
exports.seed = async function(knex) {
  await knex('resources').insert([
     {name: 'resource-1', description: 'This is resource #1.'},
     {name: 'resource-2', description: 'This is resource #2.'},
     {name: 'resource-3', description: 'This is resource #3.'},
     {name: 'resource-4', description: 'This is resource #4.'},
     {name: 'resource-5', description: 'This is resource #5.'}
  ])
}
