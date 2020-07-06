
exports.seed = async function(knex) {
  await knex('projects').insert([
     {name: 'project-1', description: 'This is project #1'},
     {name: 'project-2', description: 'This is project #2.'},
     {name: 'project-3', description: 'This is project #3.'},
     {name: 'project-4', description: 'This is project #4.'},
     {name: 'project-5', description: 'This is project #5.'},
  ])
}